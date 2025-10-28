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
  Typography,
} from '@chillUi';
import { zodResolver } from '@hookform/resolvers/zod';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

import { db } from '@/configs/firebase';
import { ROUTES } from '@/constants/ROUTES';

const formSchema = z.object({
  acceptedPrivacyPolicy: z.literal(true, {
    error: () => 'Vous devez accepter la politique de confidentialité.',
  }),
  email: z.email(),
  name: z.string().min(1),
});

export default function NewsletterComponent() {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      acceptedPrivacyPolicy: true,
      email: '',
      name: '',
    },
    resolver: zodResolver(formSchema),
  });
  const { control, handleSubmit } = form;

  const acceptedPrivacyPolicy = form.watch('acceptedPrivacyPolicy');

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    try {
      await addDoc(collection(db, 'emails'), {
        acceptedPrivacyPolicy: data.acceptedPrivacyPolicy,
        createdAt: serverTimestamp(),
        email: data.email,
        name: data.name,
      });
      toast.success('Vous êtes abonné à la newsletter');
      form.reset();
    } catch (error) {
      console.error(error);
      toast.error("Une erreur est survenue lors de l'inscription à la newsletter");
    } finally {
      setIsLoading(false);
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
                      render={({ field }) => <FormInput label="Nom" placeholder="Votre nom" {...field} />}
                    />
                    <FormField
                      control={control}
                      name="email"
                      render={({ field }) => <FormInput label="Email" placeholder="Votre email" {...field} />}
                    />
                    <FormField
                      control={control}
                      name="acceptedPrivacyPolicy"
                      render={({ field }) => (
                        <div className="flex items-start gap-2">
                          <Checkbox
                            className="mt-0.5"
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            aria-label="Accepter la politique de confidentialité"
                          />
                          <Typography variant="body-2" color="gray">
                            En vous inscrivant, vous acceptez notre{' '}
                            <Link href={ROUTES.PRIVACY_POLICY} className="text-orange-500 hover:underline">
                              politique de confidentialité
                            </Link>
                          </Typography>
                        </div>
                      )}
                    />
                    <div className="w-full">
                      <Button
                        type="submit"
                        variant="gradient"
                        className="h-10 w-full"
                        disabled={isLoading || !acceptedPrivacyPolicy}
                        isLoading={isLoading}
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
