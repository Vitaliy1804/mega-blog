import Image from 'next/image';
import myImage from './me.jpg';
import styles from './about.module.css';

export default function AboutPage() {
  return (
      <article className={styles.root}>
        <Image src={myImage} alt="Vitalii Sheremet Photo" loading='eager'/>
        <div className={''}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet illo aut repellendus nisi odio quas facere praesentium excepturi odit temporibus illum, doloremque velit architecto iusto mollitia. Voluptatem eaque iste magni!
            Amet fugit enim necessitatibus tempora blanditiis ab esse maiores doloremque ex, vero ipsa error dolore a nemo reprehenderit totam quam deleniti minus ratione ullam laboriosam! Voluptate eaque aspernatur reprehenderit quasi.
            Quisquam tempore impedit repellendus eveniet odio deserunt iusto pariatur aspernatur dicta asperiores, autem nam dolorum ullam quidem corrupti eligendi? Iusto in ex blanditiis corrupti. Ipsa quod ipsam non deleniti qui.
            A ad temporibus quas! Quae eveniet dolorem neque a eaque nemo inventore magnam quisquam. Labore atque debitis reprehenderit aliquam, dolorem qui quibusdam a totam. Quae maiores quasi ullam. Doloribus, nulla!
            Iusto unde, hic officia est assumenda odio, sint corporis libero, eaque dignissimos repellat! Voluptatem, harum quis! Numquam iste repellendus atque corporis sit aspernatur, animi quae tenetur saepe est corrupti impedit!
            Necessitatibus aut voluptates assumenda, unde labore accusantium incidunt cupiditate doloribus! Saepe iste perferendis totam temporibus quam expedita, qui eveniet doloremque consequatur error inventore in praesentium distinctio dicta quisquam labore placeat.
            Eius doloribus fugiat, placeat dolores quibusdam vitae vero ducimus laborum cupiditate, sunt, odit temporibus reiciendis doloremque quisquam dicta praesentium. Quod porro nam sapiente id labore cumque aliquam eum voluptatibus facere.
            Facere odit quidem omnis voluptatibus! Quasi corporis quam ex alias omnis sapiente recusandae unde ut, asperiores voluptatum repellendus provident nihil pariatur at, cumque maiores nemo quod. Asperiores voluptates nesciunt voluptatibus?
        </div>
      </article>
  )
}


