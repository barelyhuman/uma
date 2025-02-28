import { useRoute } from 'preact-iso'
import { useEffect } from 'preact/hooks'

import { marked } from 'marked'
import { access, readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { useState } from 'preact/hooks'
import slugify from 'slugify'
import yaml from 'yaml'
import { Navbar } from '../components/Navbar'

const fetchBlogPost = server$(async function (slug) {
  const rootPath = join('./content/blog')

  const possibleFile = join(rootPath, slug + '.md')
  const exists = access(join(rootPath, slug + '.md'))
    .then(() => true)
    .catch(() => false)

  if (!exists) {
    return {}
  }

  const fileData = await readFile(possibleFile, 'utf8')
  const [_, fm, content] = fileData.split('---', 3)
  const front = yaml.parse(fm)

  return {
    meta: front,
    content: marked(content),
  }
})

export default function BlogPost() {
  const route = useRoute()
  const slug = route.rest
  const [post, setPost] = useState()

  useEffect(() => {
    fetchBlogPost(slug).then(d => {
      if (!d.content) {
        window.location.href = '/404'
      }
      setPost(d)
    })
  }, [slug])

  if (!post) {
    return <div></div>
  }

  return (
    <div>
      <Navbar />
      <section className="my-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 flex flex-col">
        <hgroup>
          <h3 class="text-3xl font-semibold">{post.meta.title}</h3>
          <p>
            <small class="text-zinc-400 text-sm">
              {new Date(post.meta.date).toLocaleDateString()}
            </small>
          </p>
        </hgroup>

        <article
          class="my-10 prose prose-zinc"
          dangerouslySetInnerHTML={{ __html: post.content }}
        ></article>
      </section>
    </div>
  )
}
