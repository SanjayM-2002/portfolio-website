import ContactForm from '@/components/ContactForm';
import BlurFade from '@/components/magicui/blur-fade';
import BlurFadeText from '@/components/magicui/blur-fade-text';
import { ProjectCard } from '@/components/project-card';
import { ResumeCard } from '@/components/resume-card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import WavingHand from '@/components/ui/waving-hand';
import { DATA } from '@/data/resume';
import Link from 'next/link';
import Markdown from 'react-markdown';

const BLUR_FADE_DELAY = 0.5;

export default function Page() {
  return (
    <main className='flex flex-col min-h-[100dvh] space-y-10'>
      <section id='hero'>
        <div className='mx-auto w-full max-w-2xl space-y-8'>
          <div className='gap-2 flex justify-between'>
            <div className='flex-col flex flex-1 space-y-1.5'>
              <div className='flex gap-2 justify-start items-center'>
                <BlurFadeText
                  delay={BLUR_FADE_DELAY}
                  className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none'
                  yOffset={8}
                  text={`Hi, I'm ${DATA.name.split(' ')[0]}`}
                />
                <BlurFade delay={BLUR_FADE_DELAY}>
                  <WavingHand />
                </BlurFade>
              </div>
              <BlurFadeText
                className='max-w-[600px] md:text-xl'
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className='size-28 border'>
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id='about'>
        <BlurFade delay={BLUR_FADE_DELAY * 1.1}>
          <h2 className='text-xl font-bold'>About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 1.2}>
          {/* <Markdown className='prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert'> */}
          <Badge
            className='prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert'
            variant='outline'
          >
            {DATA.summary}
          </Badge>
          {/* </Markdown> */}
        </BlurFade>
      </section>

      <section id='skills'>
        <div className='flex min-h-0 flex-col gap-y-3'>
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <h2 className='text-xl font-bold'>Technical Skills</h2>
          </BlurFade>
          {/* <div className='flex flex-col flex-wrap gap-1'>
            <div className='flex  flex-wrap gap-1'>
              {DATA.skills.part1.map((skill, id) => (
                <BlurFade key={skill} delay={BLUR_FADE_DELAY * 3 + id * 0.05}>
                  <Badge key={skill}>{skill}</Badge>
                </BlurFade>
              ))}
            </div>
          </div> */}
          <div className='flex flex-col flex-wrap gap-1'>
            {Object.entries(DATA.skills).map(([part, skills], partIndex) => (
              <div key={part} className='flex flex-wrap gap-1'>
                {skills.map((skill, skillIndex) => (
                  <BlurFade
                    key={skill}
                    delay={
                      BLUR_FADE_DELAY * (partIndex + 1) + skillIndex * 0.05
                    }
                  >
                    <Badge>{skill}</Badge>
                  </BlurFade>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id='work'>
        <div className='flex min-h-0 flex-col gap-y-3'>
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className='text-xl font-bold'>Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 3.5 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? 'Present'}`}
                description={work.description}
                points={work.points}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      {/* <section id='coursework'>
        <div className='flex min-h-0 flex-col gap-y-3'>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <h2 className='text-xl font-bold'>Coursework</h2>
          </BlurFade>
          {DATA.coursework.map((course, id) => (
            <BlurFade
              key={course.course}
              delay={BLUR_FADE_DELAY * 4.5 + id * 0.05}
            >
              <ResumeCard
                key={course.course}
                logoUrl={course.logoUrl}
                altText={course.provider}
                title={course.course}
                subtitle={course.provider}
                href={course.href}
                period={`${course.start} - ${course.end ?? 'Present'}`}
                description={course.description}
                skills={course.skills}
              />
            </BlurFade>
          ))}
        </div>
      </section> */}

      <section id='projects'>
        <div className='space-y-12 w-full py-12'>
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <div className='inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm'>
                  Projects
                </div>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                  Check out my projects
                </h2>
              </div>
            </div>
          </BlurFade>
          <div className='grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto'>
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 6 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                  points={project.points}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id='contact'>
        <div className='grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12'>
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <div className='space-y-3'>
              <div className='inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm'>
                Contact
              </div>
              <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                Get in Touch
              </h2>
              {/* <p className='mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                Wanna connect with me? Drop me a message on my{' '}
                <Link
                  target='_blank'
                  href={DATA.contact.social.X.url}
                  className='text-blue-500 hover:underline'
                >
                  Twitter
                </Link>{' '}
                See you there✨
              </p> */}
            </div>
            <ContactForm />
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
