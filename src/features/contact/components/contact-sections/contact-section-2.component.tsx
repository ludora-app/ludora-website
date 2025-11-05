'use client';

import {
  Badge,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Form,
  FormField,
  FormInput,
  Heading,
  Icon,
  Typography,
} from '@chillUi';
import { zodResolver } from '@hookform/resolvers/zod';
import { T, TolgeeInstance, useTranslate } from '@tolgee/react';
import { Mail } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

import { useSendContactEmail } from '@/api/hooks/send-email.hook';
import { useSendCrmContactMessage } from '@/api/hooks/twenty-crm.hook';
import { COLORS } from '@/constants/COLORS';
import { TIcons } from '@/constants/ICONS';
import { useEventTracking } from '@/hooks/usePlausible';

const contactInfo = [
  {
    icon: Mail,
    label: 'email',
    value: 'ludora_email',
  },
  // {
  //   icon: Phone,
  //   label: 'Téléphone',
  //   value: '+33 1 23 45 67 89',
  // },
  // {
  //   icon: MapPin,
  //   label: 'Adresse',
  //   value: '123 Avenue des Sports, 75000 Paris, France',
  // },
  // {
  //   icon: Clock,
  //   label: "Heures d'ouverture",
  //   value: 'Lun - Ven: 9h00 - 18h00',
  // },
];

const formSchemaImpl = (t: TolgeeInstance['t']) =>
  z.object({
    email: z.email(t('contact_form_input_email_invalid')),
    message: z
      .string()
      .min(1, t('contact_form_input_message_required'))
      .max(1000, t('contact_form_input_message_max_length', { limit: 1000 })),
    name: z
      .string()
      .min(1, t('contact_form_input_name_required'))
      .max(80, t('contact_form_input_name_max_length', { limit: 80 })),
    subject: z
      .string()
      .min(1, t('contact_form_input_subject_required'))
      .max(100, t('contact_form_input_subject_max_length', { limit: 100 })),
  });

const socialLinks = [
  {
    href: 'https://www.instagram.com/ludora.fr',
    icon: 'instagram-solid',
  },
  {
    href: 'https://www.tiktok.com/@ludora.fr',
    icon: 'tiktok-solid',
  },
];

export default function ContactSection2() {
  const { t } = useTranslate();
  const { trackEvent } = useEventTracking();
  const [isMessageContactPending, setIsMessageContactPending] = useState(false);
  const { mutateAsync: sendEmail } = useSendContactEmail();
  const { mutateAsync: sendCrmContactMessage } = useSendCrmContactMessage();
  const formSchema = formSchemaImpl(t);
  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      email: '',
      message: '',
      name: '',
      subject: '',
    },
    resolver: zodResolver(formSchema),
  });

  const { control, handleSubmit } = form;

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      setIsMessageContactPending(true);
      await sendCrmContactMessage({
        email: data.email,
        message: data.message,
        name: data.name,
        subject: data.subject,
      });
      await sendEmail({
        email: data.email,
        message: data.message,
        name: data.name,
        subject: data.subject,
      });
      trackEvent({
        action: 'form-submit',
        buttonId: 'contact-form',
        category: 'contact',
        eventName: 'contactFormSubmit',
        source: 'contact-section-form',
      });
      toast.success(t('contact_sended_success_message'));
      form.reset();
    } catch {
      toast.error(t('contact_sended_error_message'));
    } finally {
      setIsMessageContactPending(false);
    }
  };

  return (
    <section className="container mx-auto px-4 py-12 md:py-20">
      <div className="mx-auto flex max-w-5xl flex-col gap-3.5">
        {/* Contact Form */}
        <Card>
          <CardHeader>
            <CardTitle variant="title-4" color="dark">
              <T keyName="contact_form_title" params={{ span: <span className="text-gradient" /> }} />
            </CardTitle>
          </CardHeader>
          <CardContent className="flex grow flex-col">
            <Form {...form}>
              <form id="contact-form" className="flex grow flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
                <div className="grid gap-2 lg:grid-cols-2 lg:gap-4">
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
                        {...field}
                      />
                    )}
                  />
                </div>
                <FormField
                  name="subject"
                  control={control}
                  render={({ field }) => (
                    <FormInput
                      label={t('contact_form_input_subject_label')}
                      placeholder={t('contact_form_input_subject_placeholder')}
                      showError
                      isRequired
                      {...field}
                    />
                  )}
                />
                <div className="grow">
                  <FormField
                    name="message"
                    control={control}
                    render={({ field }) => (
                      <FormInput
                        label={t('contact_form_input_message_label')}
                        textArea
                        placeholder={t('contact_form_input_message_placeholder')}
                        containerClassName="h-full flex flex-col"
                        className="max-h-32 min-h-32 md:max-h-52 md:min-h-24"
                        showError
                        isRequired
                        {...field}
                      />
                    )}
                  />
                </div>

                <Button
                  type="submit"
                  variant="gradient"
                  size="lg"
                  className="mt-4 w-full self-center md:w-1/2"
                  disabled={isMessageContactPending}
                  isLoading={isMessageContactPending}
                >
                  {t('contact_form_submit_button')}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
        {/* Contact Info */}

        <Card>
          <CardContent>
            <div className="flex flex-col md:flex-row">
              <div className="flex flex-1 flex-col items-center justify-center gap-4">
                <Heading as="h3" variant="title-5" color="dark">
                  <T keyName="contact_info_title" params={{ span: <span className="text-gradient" /> }} />
                </Heading>
                {contactInfo.map(info => (
                  <div className="flex items-center gap-4" key={info.label}>
                    <Badge variant="outline" color="primary" className="rounded-md p-2 text-orange-500">
                      <info.icon className="size-5" />
                    </Badge>
                    <div>
                      <Heading variant="title-7" color="dark" as="h3">
                        {t(info.label)}
                      </Heading>
                      <Link href={`mailto:${info.value}`}>
                        <Typography variant="body-1" color="gray">
                          {t(info.value)}
                        </Typography>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-ring my-5 h-[0.5px] w-full md:my-0 md:h-30 md:w-[0.5px]" />
              <div className="flex flex-1 flex-col items-center justify-center gap-4">
                <Heading as="h3" variant="title-5" color="dark">
                  <T keyName="contact_follow_title" params={{ span: <span className="text-gradient" /> }} />
                </Heading>
                <div className="flex items-center gap-2">
                  {socialLinks.map(link => (
                    <Link href={link.href} key={link.icon}>
                      <Badge variant="outline" color="primary" className="bg-gradient rounded-full p-3">
                        <Icon name={link.icon as TIcons} className="size-5" color={COLORS.PRIMARY} />
                      </Badge>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
