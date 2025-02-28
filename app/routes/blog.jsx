import { readdir, readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { useEffect, useState } from 'preact/hooks'
import slugify from 'slugify'
import yaml from 'yaml'
import { Navbar } from '../components/Navbar'

const fetchBlogPosts = server$(async function () {
  const rootPath = join('./content/blog')
  const filePaths = await readdir(rootPath, {
    recursive: true,
  })
  console.log({ filePaths })
  const blogIndex = await Promise.all(
    filePaths.map(async d => {
      const fileData = await readFile(join(rootPath, d), 'utf8')
      const [_, fm] = fileData.split('---', 3)
      const front = yaml.parse(fm)
      return {
        title: front.title,
        date: front.date,
        slug: slugify(d.replace(/\.md$/, '')),
        filePath: d,
      }
    })
  )
  return blogIndex
})

export default function BlogIndexPage() {
  const [blogIndex, setBlogIndex] = useState([])

  useEffect(() => {
    fetchBlogPosts().then(d => {
      setBlogIndex(d)
    })
  }, [])

  return (
    <div>
      <Navbar />
      <section className="my-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 flex flex-col">
        <h3 class="text-xl font-semibold">Blog</h3>
        <ul class="w-1/2 my-10">
          {blogIndex.map(d => {
            return (
              <li class="flex gap-10 items-center">
                <span class="text-zinc-500">
                  {new Date(d.date).toLocaleDateString()}
                </span>
                <a href={`/blog/${d.slug}`}>
                  <span class="text-zinc-700">{d.title}</span>
                </a>
              </li>
            )
          })}
        </ul>
      </section>
    </div>
  )
}
