import { readdir, readFile } from 'node:fs/promises'
import { marked } from 'marked'
import { useEffect, useState } from 'preact/hooks'
import { join } from 'node:path'
import yaml from 'yaml'
import { Navbar } from '../components/Navbar'

const fetchChangelogs = server$(async function () {
  const rootPath = join('./content/changelogs')
  const changelogFilePaths = await readdir(rootPath)
  const content = await Promise.all(
    changelogFilePaths.map(async d => {
      const fileData = await readFile(join(rootPath, d), 'utf8')
      const [_, fm, content] = fileData.split('---', 3)
      const front = yaml.parse(fm)
      return { meta: front, content: marked(content) }
    })
  )
  return content
})

export default function ChangelogPage() {
  const [changelogs, setChangelogs] = useState([])

  useEffect(() => {
    fetchChangelogs().then(d => {
      setChangelogs(d)
    })
  }, [])

  return (
    <div>
      <Navbar />
      <section className="my-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 flex flex-col">
        {changelogs.map((d, index, src) => {
          return (
            <div class="flex">
              <div class="items-center w-20 flex flex-col">
                <div
                  class={`w-[1px] h-[7px] ${index === 0 ? 'bg-transparent' : 'bg-zinc-200'}`}
                ></div>
                <div class="h-2.5 w-2.5 flex relative">
                  <div class="h-full w-full m-auto rounded-full bg-zinc-700"></div>
                </div>
                <div
                  class={`${index !== src.length - 1 ? 'flex-1' : ''} w-[1px] bg-zinc-200`}
                ></div>
              </div>
              <div class="w-full px-8 pb-14 flex flex-col">
                <h2 class="mt-0 mb-2">{d.meta?.title}</h2>
                <div class="flex flex-col gap-4">
                  <article
                    class="text-zinc-400 font-normal font-mono leading-normal"
                    dangerouslySetInnerHTML={{ __html: d.content }}
                  ></article>
                </div>
              </div>
            </div>
          )
        })}
      </section>
    </div>
  )
}
