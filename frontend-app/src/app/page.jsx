import Hero from "@/components/hero/Hero"

export default async function Home() {
  const code = await getCode()
  return <Hero />
}

async function getCode() {
  // const res = await octokit.request("GET /gists", {
  //   headers: {
  //     "X-GitHub-Api-Version": "2022-11-28",
  //   },
  // })

  const res = await fetch(`https://api.github.com/users/psk-98/gists`)

  return res.json()
}
