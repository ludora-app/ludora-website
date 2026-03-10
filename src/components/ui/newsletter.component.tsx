'use client';

import {
  Badge,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Checkbox,
  Form,
  FormField,
  FormInput,
  Heading,
  Label,
  Typography,
} from '@chillUi';
import { zodResolver } from '@hookform/resolvers/zod';
import { TolgeeInstance, useTranslate } from '@tolgee/react';
import Link from 'next/link';
import { isArray } from 'radash';
import { useForm, useWatch } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

import { useAddCrmPerson } from '@/api/hooks/twenty-crm.hook';
import { ANALYTICS_EVENTS } from '@/constants/analytics-events.constants';
import { ROUTES } from '@/constants/ROUTES';
import { useAnalytics } from '@/hooks/analytics-trackers.hook';

const formSchemaImpl = (t: TolgeeInstance['t']) =>
  z.object({
    acceptedPrivacyPolicy: z.literal(true, {
      error: () => 'Vous devez accepter la politique de confidentialité.',
    }),
    email: z.email(t('newsletter_form_input_email_invalid')),
    name: z
      .string()
      .min(1, t('newsletter_form_input_name_required'))
      .max(80, t('newsletter_form_input_name_max_length', { limit: 80 })),
  });

export default function NewsletterComponent() {
  const { t } = useTranslate();
  const { trackError, trackEvent } = useAnalytics();

  const formSchema = formSchemaImpl(t);
  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      acceptedPrivacyPolicy: true,
      email: '',
      name: '',
    },
    resolver: zodResolver(formSchema),
  });
  const { control, handleSubmit } = form;

  const acceptedPrivacyPolicy = useWatch({
    control,
    name: 'acceptedPrivacyPolicy',
  });
  const { isPending: isCreatePersonPensing, mutateAsync: addCrmPerson } = useAddCrmPerson();

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      trackEvent({ eventName: ANALYTICS_EVENTS.FORMS.NEWSLETTER });
      await addCrmPerson({
        email: data.email,
        name: data.name,
      });
      toast.success(t('newsletter_success_message'));
      form.reset();
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
      trackError({ error });
      toast.error(t('newsletter_common_error'));
    }
  };

  return (
    <section className="bg-white py-20" id="newsletter">
      <div className="container mx-auto">
        <div className="bg-gradient mx-auto max-w-4xl rounded-2xl border border-orange-100 px-4 py-8 md:p-12">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <Badge variant="light" size="md" className="mb-4">
                Restez informé
              </Badge>
              <Heading as="h2" variant="title-3" className="mb-4">
                Abonnez-vous à notre <span className="text-gradient">newsletter</span>
              </Heading>
              <Typography variant="body-1" color="gray" className="mb-6">
                Recevez nos dernières actualités, conseils sportifs et informations sur les événements à venir
                directement dans votre boîte mail.
              </Typography>
              <ul className="mb-6 space-y-2">
                {[
                  'Conseils sportifs hebdomadaires',
                  'Événements exclusifs',
                  'Nouvelles fonctionnalités en avant-première',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-5 shrink-0 text-orange-500"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Card>
              <CardHeader>
                <CardTitle as="h3" variant="title-5" color="dark">
                  Inscrivez-vous gratuitement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={control}
                      name="name"
                      render={({ field }) => (
                        <FormInput showError isRequired label="Nom" placeholder="Votre nom" {...field} />
                      )}
                    />
                    <FormField
                      control={control}
                      name="email"
                      render={({ field }) => (
                        <FormInput isRequired showError label="Email" placeholder="Votre email" {...field} />
                      )}
                    />
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
                    <div className="w-full">
                      <Button
                        id="newsletter-subscribe-button"
                        type="submit"
                        variant="gradient"
                        className="h-10 w-full"
                        disabled={isCreatePersonPensing || !acceptedPrivacyPolicy}
                        isLoading={isCreatePersonPensing}
                      >
                        S&apos;abonner à la newsletter
                      </Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
