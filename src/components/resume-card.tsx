'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronRightIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import BlurFade from './magicui/blur-fade';
interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
  points?: string[];
  skills?: string[];
}
export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
  points,
  skills,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(true);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (points) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <Link
      href={href || '#'}
      className='block cursor-none'
      onClick={handleClick}
    >
      <Card className='flex'>
        <div className='flex-none'>
          <Avatar className='border size-12 m-auto bg-muted-background dark:bg-foreground'>
            <AvatarImage
              src={logoUrl}
              alt={altText}
              className='object-contain'
            />
            <AvatarFallback>{altText[0]}</AvatarFallback>
          </Avatar>
        </div>
        <div className='flex-grow ml-4 items-center flex-col group'>
          <CardHeader>
            <div className='flex items-center justify-between gap-x-2 text-base'>
              <h3 className='inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm'>
                {title}
                {badges && (
                  <span className='inline-flex gap-x-1'>
                    {badges.map((badge, index) => (
                      <Badge
                        variant='secondary'
                        className='align-middle text-xs'
                        key={index}
                      >
                        {badge}
                      </Badge>
                    ))}
                  </span>
                )}
                <ChevronRightIcon
                  className={cn(
                    'size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100',
                    isExpanded ? 'rotate-90' : 'rotate-0'
                  )}
                />
              </h3>
              <div className='text-xs sm:text-sm tabular-nums text-muted-foreground text-right'>
                {period}
              </div>
            </div>
            {subtitle && <div className='font-sans text-xs'>{subtitle}</div>}
          </CardHeader>
          {points && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isExpanded ? 1 : 0,

                height: isExpanded ? 'auto' : 0,
              }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className='mt-2 text-xs sm:text-sm'
            >
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className='flex flex-wrap gap-x-[1px]'
                  >
                    {points &&
                      points.length > 0 &&
                      points.map((p, index) => (
                        <BlurFade
                          key={index}
                          delay={index * 0.01}
                          inView={isExpanded}
                          scale={1}
                        >
                          <Badge
                            className='px-1 my-1 text-[12px]'
                            variant='outline'
                            key={index}
                          >
                            {p}
                          </Badge>
                        </BlurFade>
                      ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {skills && (
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className='flex flex-wrap gap-x-0 gap-0.5 mt-5'
                    >
                      {skills.map((skill, index) => (
                        <BlurFade
                          key={skill}
                          delay={index * 0.05}
                          inView={isExpanded}
                          scale={0.9}
                        >
                          <Badge>{skill}</Badge>
                        </BlurFade>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </motion.div>
          )}
        </div>
      </Card>
    </Link>
  );
};
