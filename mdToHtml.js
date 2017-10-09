'ust strict'

const fs             = require('fs')
const { promisify }  = require('util')
const readFileAsync  = promisify(fs.readFile)
const writeFileAsync = promisify(fs.writeFile)

const showdown  = require('showdown')
const converter = new showdown.Converter()

async function main () {
    const markdown     = await readFileAsync('./resume.md', 'utf8')
    const markdownHtml = converter.makeHtml(markdown)

    const html = `<!DOCTYPE><html><head></head><body>${markdownHtml}</body></html>`

    await writeFileAsync('./index.html', html)
}

main().then(() => {
    process.exit()
})