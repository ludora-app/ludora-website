'use client';

import type React from 'react';

import { db } from '@/configs/firebase';
import {
  Button,
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
} from '@chillUi';
import { zodResolver } from '@hookform/resolvers/zod';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { Bell, CalendarClock } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

interface ComingSoonModalProps {
  children: React.ReactNode;
  isOpen?: boolean;
}

const formSchema = z.object({
  email: z.string().email(),
});

export function ComingSoonModal({ children, isOpen }: ComingSoonModalProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(isOpen);

  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      email: '',
    },
    resolver: zodResolver(formSchema),
  });
  const { control, handleSubmit } = form;

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    try {
      await addDoc(collection(db, 'emails'), {
        createdAt: serverTimestamp(),
        email: data.email,
      });
      toast.success('Vous êtes abonné à la newsletter');
      form.reset();
      setIsDialogOpen(false);
    } catch {
      toast.error("Une erreur est survenue lors de l'inscription à la newsletter");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold">Prochainement disponible</DialogTitle>
          <DialogDescription className="text-center">
            L&apos;application Ludora est actuellement en développement
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center py-4">
          <div className="mb-4 flex size-20 items-center justify-center rounded-full border border-orange-100 bg-gradient-to-br from-orange-50 to-rose-50 text-orange-500">
            <CalendarClock className="size-10" />
          </div>
          <p className="mb-6 text-center">
            Nous travaillons activement sur l&apos;application Ludora pour vous offrir la meilleure expérience possible.
            Elle sera disponible très prochainement sur l&apos;App Store et Google Play.
          </p>
          <div className="mb-6 flex justify-center gap-4">
            <div className="flex flex-col items-center">
              <div className="mb-2 flex size-12 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-rose-500 text-xl font-bold text-white">
                <Icon name="app-store-solid" color="#fff" />
              </div>
              <span className="text-sm">App Store</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-2 flex size-12 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-rose-500 text-xl font-bold text-white">
                <Icon name="google-play-solid" color="#fff" />
              </div>

              <span className="text-sm">Google Play</span>
            </div>
          </div>
          -
          <div className="w-full">
            <Heading variant="title-5" as="h3" color="dark" className="mb-3 flex items-center gap-2">
              <Bell className="size-4" /> Soyez informé du lancement
            </Heading>

            <Form {...form}>
              <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2">
                <div className="flex-2">
                  <FormField
                    control={control}
                    name="email"
                    render={({ field }) => <FormInput type="email" placeholder="Votre email" required {...field} />}
                  />
                </div>
                <div className="flex-1">
                  <Button
                    type="submit"
                    variant="gradient"
                    className="h-full w-full"
                    isLoading={isLoading}
                    disabled={isLoading}
                  >
                    M&apos;alerter
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
