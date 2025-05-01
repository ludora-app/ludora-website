'use client';

import { useSendEmail } from '@/api/hooks/send-email.hook';
import { COLORS } from '@/constants/COLORS';
import { TIcons } from '@/constants/ICONS';
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
import { Mail } from 'lucide-react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'contact@ludora.fr',
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

const formSchema = z.object({
  email: z.string().email("L'email est invalide"),
  message: z.string().min(1, 'Le message est requis').max(300),
  name: z.string().min(1, 'Le nom est requis').max(30),
  subject: z.string().min(1, 'Le sujet est requis').max(30),
});

const socialLinks = [
  {
    href: 'https://www.facebook.com/ludora',
    icon: 'facebook-solid',
  },
  {
    href: 'https://www.instagram.com/ludora.app',
    icon: 'instagram-solid',
  },
  {
    href: 'https://www.tiktok.com/@ludora.app',
    icon: 'tiktok-solid',
  },
];

export default function ContactSection2() {
  const { isLoading: isSendingEmail, mutateAsync: sendEmail } = useSendEmail();
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
      await sendEmail({
        email: data.email,
        message: data.message,
        name: data.name,
        subject: data.subject,
      });
      toast.success('Merci pour votre message, nous reviendrons vers vous dans les plus brefs délais.');
      form.reset();
    } catch {
      toast.error("Une erreur est survenue lors de l'envoi du message, veuillez réessayer plus tard.");
    }
  };

  return (
    <section className="container mx-auto px-4 py-12 md:py-20">
      <div className="mx-auto flex max-w-screen-lg flex-col gap-3.5">
        {/* Contact Form */}
        <Card>
          <CardHeader>
            <CardTitle variant="title-4" color="dark">
              Envoyez-nous un <span className="text-gradient">message</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-grow flex-col">
            <Form {...form}>
              <form className="flex flex-grow flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
                <div className="grid gap-2 lg:grid-cols-2 lg:gap-4">
                  <FormField
                    name="name"
                    control={control}
                    render={({ field }) => (
                      <FormInput label="Nom complet" placeholder="Votre nom" showError {...field} />
                    )}
                  />
                  <FormField
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <FormInput label="Email" placeholder="votre@email.com" showError {...field} />
                    )}
                  />
                </div>
                <FormField
                  name="subject"
                  control={control}
                  render={({ field }) => (
                    <FormInput label="Sujet" placeholder="Sujet de votre message" showError {...field} />
                  )}
                />
                <div className="flex-grow">
                  <FormField
                    name="message"
                    control={control}
                    render={({ field }) => (
                      <FormInput
                        label="Message"
                        textArea
                        placeholder="Votre message..."
                        containerClassName="h-full flex flex-col"
                        className="h-32 lg:h-full"
                        showError
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
                  disabled={isSendingEmail}
                  isLoading={isSendingEmail}
                >
                  Envoyer le message
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
                  Informations de <span className="text-gradient">contact</span>
                </Heading>
                {contactInfo.map(info => (
                  <div className="flex items-center gap-4" key={info.label}>
                    <Badge variant="outline" color="primary" className="rounded-md p-2 text-orange-500">
                      <info.icon className="size-5" />
                    </Badge>
                    <div>
                      <Heading variant="title-7" color="dark" as="h3">
                        {info.label}
                      </Heading>
                      <Typography variant="body-1" color="gray">
                        {info.value}
                      </Typography>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-ring my-5 h-[0.5px] w-full md:my-0 md:h-30 md:w-[0.5px]" />
              <div className="flex flex-1 flex-col items-center justify-center gap-4">
                <Heading as="h3" variant="title-5" color="dark">
                  Suivez-<span className="text-gradient">nous</span>
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
