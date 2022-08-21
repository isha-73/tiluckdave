import Image from 'next/image';
import Link from 'next/link';

import Container from '../components/Container';
import BlogPostCard from '../components/BlogPostCard';

export default function Home({ videos }) {
  return (
    <Container
      title="Tilak Dave"
      description="Web developer, Mentor and Tech Enthusiast always on the urge to explore the newest technologies and believe that human future is in the hands of the most techy people." >
      <div className="flex flex-col justify-center items-start max-w-2xl border-slate-200 dark:border-slate-700 mx-auto pb-8">
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col pr-8">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-slate-900 dark:text-slate-50">
              Tilak Dave
            </h1>
            <h2 className="text-slate-700 dark:text-slate-200 mb-4">
              Student, Web Developer, Looking for Internship
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-16">
              Learning to build SaaS applications. I use NextJs for web development. Wanna Support me? <a href="https://buymeacoffee.com/tiluckdave" className="font-semibold">Buy me a coffee</a>
            </p>
          </div>
          <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
            <Image
              alt="Tilak Dave"
              height={176}
              width={176}
              src="/avatar.png"
              className="rounded-full filter"
            />
          </div>
        </div>
        <h3 className="font-bold text-lg md:text-xl tracking-tight mb-6 text-slate-900 dark:text-slate-50">
          Featured Posts
        </h3>
        <div className="flex gap-6 flex-col w-full">
          <BlogPostCard
            title="Why SWR is awesome?"
            slug="why-swr-is-awesome"
          />
        </div>
        {/* <Link href="/blog">
          <a className="flex mt- text-slate-600 dark:text-slate-400 leading-7 rounded-lg hover:text-slate-800 dark:hover:text-slate-200 transition-all h-6 justify-center items-center">
            Read all posts
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="h-6 w-6 ml-1"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
              />
            </svg>
          </a>
        </Link> */}
      </div>
    </Container>
  );
}
