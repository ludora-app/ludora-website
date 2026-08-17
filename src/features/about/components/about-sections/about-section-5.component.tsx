import { Badge, Card, CardContent, CardDescription, CardHeader, CardTitle, Heading, Image, Typography } from '@chillUi';

import { AmirImg, GanaImg } from '@/assets';
import { getTranslate, T } from '@/tolgee/server';

const teamMembers = [
  {
    bio: 'amir_bio',
    image: AmirImg,
    name: 'amir_fullname',
    role: 'amir_role',
  },
  {
    bio: 'gana_bio',
    image: GanaImg,
    name: 'gana_fullname',
    role: 'gana_role',
  },
];

export default async function AboutSection5() {
  const t = await getTranslate();

  return (
    <section className="bg-gradient px-4 py-12 md:py-20">
      <div className="container mx-auto">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <Badge variant="light" size="md" className="mb-4">
            {t('about_team_badge')}
          </Badge>
          <Heading variant="title-2" as="h2" className="mb-4">
            <T keyName="about_team_title" params={{ span: <span className="text-gradient" /> }} />
          </Heading>
          <Typography variant="body-1" color="gray">
            {t('about_team_description')}
          </Typography>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="w-full lg:w-md">
              <CardHeader className="flex flex-col items-center justify-center gap-4">
                <div className="bg-gradient size-40 overflow-hidden rounded-full">
                  <Image src={member.image} alt={member.name} />
                </div>
                <CardTitle color="dark" variant="title-5">
                  {t(member.name)}
                </CardTitle>
                <CardDescription>{t(member.role)}</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body-1" color="gray">
                  {t(member.bio)}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
