'use client';

import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Form,
  FormField,
  FormInput,
  Heading,
  Typography,
} from '@chillUi';
import { zodResolver } from '@hookform/resolvers/zod';
import { TolgeeInstance, useTranslate } from '@tolgee/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

import { useSendPartnershipEmail } from '@/api/hooks/send-email.hook';
import { useAddCrmOpportunity } from '@/api/hooks/twenty-crm.hook';

const formSchemaImpl = (t: TolgeeInstance['t']) =>
  z.object({
    email: z.email(t('contact_form_input_email_invalid')),
    name: z
      .string()
      .min(1, t('contact_form_input_name_required'))
      .max(80, t('contact_form_input_name_max_length', { limit: 80 })),
    phoneNumber: z
      .string()
      .refine(
        value => !value || (value.replace(/[^0-9]/g, '').length >= 10 && value.replace(/[^0-9]/g, '').length <= 20),
        t('partners_form_input_phone_invalid'),
      )
      .optional(),
    structure: z
      .string()
      .min(1, t('partners_form_input_structure_required'))
      .max(100, t('partners_form_input_structure_max_length', { limit: 100 })),
  });

export default function PartnersSections1() {
  const { t } = useTranslate();
  const formSchema = formSchemaImpl(t);
  const { mutateAsync: addCrmOpportunity } = useAddCrmOpportunity();
  const { mutateAsync: sendPartnershipEmail } = useSendPartnershipEmail();
  const [isFormPending, setIsFormPending] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      email: '',
      name: '',
      phoneNumber: '',
      structure: '',
    },
    resolver: zodResolver(formSchema),
  });

  const { control, handleSubmit } = form;

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsFormPending(true);
    try {
      const opportunityData = {
        companyName: data.structure,
        email: data.email,
        name: data.name,
        phoneNumber: data.phoneNumber || '',
      };
      await sendPartnershipEmail(opportunityData);
      await addCrmOpportunity(opportunityData);
      toast.success(t('contact_sended_success_message'));
      form.reset();
    } catch {
      toast.error(t('contact_sended_error_message'));
    } finally {
      setIsFormPending(false);
    }
  };

  return (
    <section id="partners_contact" className="bg-primary/5 py-16">
      <div className="container mx-auto px-4 text-center">
        <Heading as="h2" className="mb-6">
          {t('partners_join_title')}
        </Heading>
        <Typography className="mb-8">{t('partners_join_subtitle')}</Typography>
        <div className="mx-auto max-w-md">
          <Card className="text-left">
            <CardHeader>
              <CardTitle color="dark">{t('partners_form_title')}</CardTitle>
              <Typography variant="body-2">{t('partners_form_subtitle')}</Typography>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form id="partnership-form" className="space-y-1" onSubmit={handleSubmit(onSubmit)}>
                  <FormField
                    name="name"
                    control={control}
                    render={({ field }) => (
                      <FormInput
                        label={t('contact_from_input_name_label')}
                        placeholder={t('contact_form_input_name_placeholder')}
                        showError
                        isRequired
                        {...field}
                      />
                    )}
                  />
                  <FormField
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <FormInput
                        label={t('contact_form_input_email_label')}
                        placeholder={t('contact_form_input_email_placeholder')}
                        showError
                        isRequired
                        type="email"
                        {...field}
                      />
                    )}
                  />
                  <FormField
                    name="phoneNumber"
                    control={control}
                    render={({ field }) => (
                      <FormInput
                        label={t('contact_form_input_phone_label')}
                        placeholder={t('contact_form_input_phone_placeholder')}
                        showError
                        type="tel"
                        {...field}
                      />
                    )}
                  />
                  <FormField
                    name="structure"
                    control={control}
                    render={({ field }) => (
                      <FormInput
                        label={t('partners_form_structure_label')}
                        placeholder={t('partners_form_structure_placeholder')}
                        showError
                        isRequired
                        {...field}
                      />
                    )}
                  />
                  <Button type="submit" className="mt-4 w-full" isLoading={isFormPending} disabled={isFormPending}>
                    {t('partners_form_submit')}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
