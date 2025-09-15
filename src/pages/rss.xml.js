import rss from '@astrojs/rss';
import { baseURL, metadata } from "@config/site.config.json";
import { getCollection } from 'astro:content';

export async function GET() {
  const posts = await getCollection('blog');
  return rss({
    title: metadata.title,
    description: metadata.description,
    site: baseURL,
    link: baseURL,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
    })),
    customData: `
      <language>en-us</language>
      <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
      <atomLink href="/rss.xml" rel="self" type="application/rss+xml"/>
    `,
  });
}