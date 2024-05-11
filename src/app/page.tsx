import { getAllArticles } from './(server)/api';
import { ROUTING } from './routing';
import { AppLink } from './shared/components/app-link';

export default async function Home() {
  const allArticles = await getAllArticles()
  return <>
  <ul>
  <h1>Drag13 blog</h1>
    {allArticles.map((article)=> (
      <li key={article.name}>
        <AppLink href={ROUTING.article(article.name)}>
        {article.header}
        </AppLink>
        </li>
    ))}
  </ul>
  </>;
}
