import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Heading, Typography } from '@chillUi';

export default function ContactSection3() {
  return (
    <section className="bg-gradient mx-auto w-full px-4 py-12 md:py-20">
      <div className="container mx-auto">
        <div className="mx-auto mb-12 flex max-w-3xl flex-col gap-2 text-center">
          <Heading variant="title-3" as="h3" color="dark">
            Questions fréquentes
          </Heading>
          <Typography variant="body-1" color="gray">
            Vous avez des questions ? Consultez notre FAQ pour trouver rapidement des réponses.
          </Typography>
        </div>

        <div className="mx-auto max-w-3xl rounded-2xl border bg-white p-8 shadow-sm">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Comment créer un compte sur Ludora ?</AccordionTrigger>
              <AccordionContent>
                Pour créer un compte, téléchargez l&apos;application Ludora sur l&apos;App Store ou Google Play, puis
                suivez les instructions d&apos;inscription. Vous devrez fournir quelques informations de base et
                vérifier votre adresse email.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Comment organiser un match ?</AccordionTrigger>
              <AccordionContent>
                Une fois connecté, accédez à la section &quot;Organiser&quot; dans l&apos;application. Sélectionnez le
                sport, la date, l&apos;heure et le lieu. Vous pouvez ensuite inviter des joueurs ou laisser
                l&apos;application trouver des participants pour vous.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Comment rejoindre une équipe existante ?</AccordionTrigger>
              <AccordionContent>
                Consultez la section &quot;Découvrir&quot; pour voir les matchs et équipes disponibles près de chez
                vous. Vous pouvez filtrer par sport, niveau et distance. Cliquez sur &quot;Rejoindre&quot; pour demander
                à participer.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>L&apos;application est-elle gratuite ?</AccordionTrigger>
              <AccordionContent>
                Oui, l&apos;application Ludora est entièrement gratuite à télécharger et à utiliser. Certaines
                fonctionnalités premium pourraient être proposées à l&apos;avenir, mais les fonctionnalités de base
                resteront gratuites.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>Comment fonctionne le système de niveau ?</AccordionTrigger>
              <AccordionContent>
                Lors de votre inscription, vous indiquez votre niveau pour chaque sport (débutant, intermédiaire,
                avancé). Ce niveau peut évoluer en fonction des évaluations des autres joueurs après les matchs,
                permettant ainsi de créer des équipes équilibrées.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
