import Container from 'components/Container'
import Tweet from 'components/Tweet'
import { getTweets } from 'lib/twitter'
import { InferGetStaticPropsType } from "next";

export default function Tweets({ tweets }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container
      title="Tweets - Dany Dodson"
      description="A collection of tweets that inspire me, make me laugh, and make me think."
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Tweets
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          This is a collection of tweets I've enjoyed. I use Twitter quite a
          bit, so I wanted a place to publicly share what inspires me, makes me
          laugh, and makes me think.
        </p>
        {tweets.map((tweet) => (
          <Tweet key={tweet.id} {...tweet} />
        ))}
      </div>
    </Container>
  )
}

export async function getStaticProps() {
  const tweets = await getTweets([
    '1610639746182836224',
    '1590787096863989760',
    '1498723275672752128',
    '1503727016255930376',
    '1352290448304447489',
    '1235128718869164032',
    '1228016704145354752',
    '1220434148143325185'
  ])

  return { props: { tweets } }
}
