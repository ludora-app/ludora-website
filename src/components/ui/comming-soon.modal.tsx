'use client';

import type React from 'react';

import {
  Button,
  Checkbox,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Form,
  FormField,
  FormInput,
  Heading,
  Icon,
  Label,
  Typography,
} from '@chillUi';
import { zodResolver } from '@hookform/resolvers/zod';
import { TolgeeInstance, useTranslate } from '@tolgee/react';
import { Bell, CalendarClock } from 'lucide-react';
import Link from 'next/link';
import { isArray } from 'radash';
import { useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

import { useAddCrmPerson } from '@/api/hooks/twenty-crm.hook';
import { ROUTES } from '@/constants/ROUTES';

interface ComingSoonModalProps {
  children: React.ReactNode;
  isOpen?: boolean;
}

const formSchemaImpl = (t: TolgeeInstance['t']) =>
  z.object({
    acceptedPrivacyPolicy: z.literal(true, {
      error: () => 'Vous devez accepter la politique de confidentialité.',
    }),
    email: z.email(t('newsletter_form_input_email_invalid')),
  });

export function ComingSoonModal({ children, isOpen }: ComingSoonModalProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(isOpen);
  const { isPending: isAddCrmPersonPending, mutateAsync: addCrmPerson } = useAddCrmPerson();
  const { t } = useTranslate();
  const formSchema = formSchemaImpl(t);

  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      acceptedPrivacyPolicy: true,
      email: '',
    },
    resolver: zodResolver(formSchema),
  });
  const { control, handleSubmit } = form;
  const acceptedPrivacyPolicy = useWatch({ control, name: 'acceptedPrivacyPolicy' });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      await addCrmPerson({
        email: data.email,
      });
      toast.success(t('newsletter_success_message'));
      form.reset();
      setIsDialogOpen(false);
    } catch (error) {
      if (
        error &&
        typeof error === 'object' &&
        'messages' in error &&
        isArray(error?.messages) &&
        error?.messages?.[0] === `Duplicate Emails with value ${data.email}. Please set a unique one.`
      ) {
        toast.error(t('newsletter_error_email_already_exists'));
        return;
      }
      toast.error(t('newsletter_common_error'));
    }
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold">
            <span className="text-gradient">Prochainement</span> disponible
          </DialogTitle>
          <DialogDescription className="text-center">
            L&apos;application Ludora est actuellement en développement
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center py-4">
          <div className="mb-4 flex size-20 items-center justify-center rounded-full border border-orange-100 bg-linear-to-br from-orange-50 to-rose-50 text-orange-500">
            <CalendarClock className="size-10" />
          </div>
          <p className="mb-6 text-center">
            Nous travaillons activement sur l&apos;application Ludora pour vous offrir la meilleure expérience possible.
            Elle sera disponible très prochainement sur l&apos;App Store et Google Play.
          </p>
          <div className="mb-6 flex justify-center gap-4">
            <div className="flex flex-col items-center">
              <div className="mb-2 flex size-12 items-center justify-center rounded-full bg-linear-to-br from-orange-500 to-rose-500 text-xl font-bold text-white">
                <Icon name="app-store-solid" color="#fff" />
              </div>
              <span className="text-sm">App Store</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-2 flex size-12 items-center justify-center rounded-full bg-linear-to-br from-orange-500 to-rose-500 text-xl font-bold text-white">
                <Icon name="google-play-solid" color="#fff" />
              </div>

              <span className="text-sm">Google Play</span>
            </div>
          </div>
          <div className="w-full">
            <Heading variant="title-5" as="h3" color="dark" className="mb-3 flex items-center gap-2">
              <Bell className="size-4" /> Soyez informé du lancement
            </Heading>

            <Form {...form}>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
                <div className="flex gap-2">
                  <div className="flex-2">
                    <FormField
                      control={control}
                      name="email"
                      render={({ field }) => <FormInput type="email" required placeholder="Votre email" {...field} />}
                    />
                  </div>
                  <div className="flex-1">
                    <Button
                      type="submit"
                      variant="gradient"
                      className="h-full w-full"
                      isLoading={isAddCrmPersonPending}
                      disabled={isAddCrmPersonPending || !acceptedPrivacyPolicy}
                    >
                      M&apos;alerter
                    </Button>
                  </div>
                </div>
                <FormField
                  control={control}
                  name="acceptedPrivacyPolicy"
                  render={({ field }) => (
                    <div className="flex items-start gap-2">
                      <Checkbox
                        id="acceptedPrivacyPolicy"
                        className="mt-0.5"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        aria-label="Accepter la politique de confidentialité"
                      />
                      <Label htmlFor="acceptedPrivacyPolicy">
                        <Typography variant="body-2" color="gray">
                          En vous inscrivant, vous acceptez notre{' '}
                          <Link href={ROUTES.PRIVACY_POLICY} className="text-orange-500 hover:underline">
                            politique de confidentialité
                          </Link>
                        </Typography>
                      </Label>
                    </div>
                  )}
                />
              </form>
            </Form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
