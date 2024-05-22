import Image from 'next/image'
import Link from 'next/link'
import { FaMinus } from 'react-icons/fa6'

//images
import blogImg1 from '@/assets/images/photos/3.jpg'
import blogImg2 from '@/assets/images/photos/4.jpg'
import blogImg3 from '@/assets/images/photos/5.jpg'
import blogImg4 from '@/assets/images/photos/6.jpg'
import post from '@/assets/images/blog/hero-post.png'

const blogImages = [blogImg1, blogImg2, blogImg3, blogImg4]

const PostContent = () => {
  return (
    <section>
      <div className="container">
        <p className="text-sm/relaxed tracking-wider text-gray-600 mb-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
          officia neque beatae at inventore excepturi numquam sint commodi
          alias, quam consequuntur corporis ex, distinctio eaque sapiente
          pariatur iure ad necessitatibus in quod obcaecati natus consequatur.
          Sed dicta maiores, eos culpa.
        </p>
        <p className="text-sm/relaxed tracking-wider text-gray-600 mb-6">
          Voluptatum animi, voluptate sint aperiam facere a nam, ex reiciendis
          eum nemo ipsum nobis, rem illum cupiditate at quaerat amet qui
          recusandae hic, atque laboriosam perspiciatis? Esse quidem minima,
          voluptas necessitatibus, officia culpa quo nulla, cupiditate iste vel
          unde magni.
        </p>
        <div>
          <Image
            alt="postImg"
            width={1088}
            height={418}
            src={post}
            className="rounded-md"
          />
          <p className="text-xs text-gray-500 mt-2 text-center">
            The image caption referencing the above image
          </p>
        </div>
        <h1 className="text-xl mb-3 mt-10">
          Itaque earum rerum hic tenetur sapiente delectu
        </h1>
        <p className="text-sm/relaxed tracking-wider text-gray-600 mb-6">
          Sed ut perspiciatis unde omnis iste natus the error sit voluptatem
          accusantium doloremque laudantium totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo Et harum quidem rerum facilis est et expedita
          distinctio nam libero tempore cum soluta nobis est eligendi optio
          cumque nihil impedit quo minus id quod maxime placeat facere possimus
          omnis voluptas assumenda est omnis dolor repellendus.
        </p>
        <div className="bg-gray-100 p-8 mb-6">
          <h5 className="text-base sm:text-lg font-normal text-gray-600 mb-3">
            Perspiciatis unde omnis iste natus error voluptatem accusantium
            doloremque laudantium totam rem aperiam eaque ipsa quae ab illo
            inventore veritatis et quasi architecto beataevitae dicta sunt
            explicabo tempore cum soluta.
          </h5>
          <p className="inline-flex gap-2 items-center text-gray-500 font-light text-sm">
            <FaMinus /> Christian Hall
          </p>
        </div>
        <p className="text-sm/relaxed tracking-wider text-gray-600 mb-5">
          At vero eos et accusamus et iusto odio dignissimos ducimus that qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate provident
          similique sunt in culpa qui officia deserunt mollitia animi id est
          laborum et fuga.
        </p>
        <p className="text-sm/relaxed tracking-wider text-gray-600 mb-5">
          Itaque earum rerum hic tenetur sapiente delectu aut reiciendis
          voluptatibus maiores alias consequ perferendis doloribus asperiores
          repellat. Sed ut perspiciatis unde omnis iste natus error sit
          voluptatem accusantium doloremque laudantium totam rem aperiam eaque
          ipsa quae ab illo inventore veritatisquasi architecto beatae vitae
          dicta sunt explicabo.
        </p>
        <p className="text-sm/relaxed tracking-wider text-gray-600 mb-5">
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam nisi aliquid ex ea commodi consequatur? Quis autem
          vel eum iure reprehenderit qui in ea voluptate lit esse quam nihil
          molestiae consequatur eligendi optio cumque nihil impedit quo minus id
          quod maxime placeat facere possimus omnis voluptas assumenda est vel
          illum qui dolorem eum fugiat quo voluptas aperiam, eaque ipsa quae ab
          illo inventore.
        </p>
        <div>
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-8 my-10">
            {(blogImages ?? []).map((image, idx) => {
              return (
                <div key={idx}>
                  <Image
                    alt="postImage"
                    width={528}
                    height={297}
                    src={image}
                    className="rounded"
                  />
                </div>
              )
            })}
          </div>
        </div>
        <h6 className="text-sm/relaxed tracking-wider mb-3">Conclusion</h6>
        <p className="text-sm/relaxed tracking-wider text-gray-600 mb-5">
          Itaque earum rerum hic tenetur sapiente delectus aut reiciendis
          voluptatibus maiores alias consequatur aut perferendis doloribus
          asperiores repellat qui dolorem ipsum quia dolor sit amet consectetur
          velitsedquia non numquam eius modi tempora incidunt.
        </p>
        <p className="text-sm/relaxed tracking-wider text-gray-600 mb-5">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit sed quia consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt.
        </p>
        <div className="flex flex-col gap-3">
          <p className="inline-flex gap-3 items-center text-sm tracking-wider text-gray-600">
            <FaMinus />
            Dream places
          </p>
          <p className="inline-flex gap-3 items-center text-sm tracking-wider text-gray-600">
            <FaMinus />
            Walking/Hiking tours
          </p>
          <p className="inline-flex gap-3 items-center text-sm tracking-wider text-gray-600">
            <FaMinus />
            Tennis lessons with expert coaches
          </p>
          <p className="inline-flex gap-3 items-center text-sm tracking-wider text-gray-600">
            <FaMinus />
            Sailing adventures
          </p>
        </div>
        <div className="flex flex-wrap sm:gap-2 gap-5 mt-10">
          <div>
            <Link
              href=""
              className="text-xs bg-gray-200 rounded-md font-medium transition-all hover:shadow-md hover:bg-gray-300/80 focus:bg-gray-300/80 py-2 px-4"
            >
              Startup
            </Link>
          </div>
          <div>
            <Link
              href=""
              className="text-xs bg-gray-200 rounded-md font-medium transition-all hover:shadow-md hover:bg-gray-300/80 focus:bg-gray-300/80 py-2 px-4"
            >
              Website Design
            </Link>
          </div>
          <div>
            <Link
              href=""
              className="text-xs bg-gray-200 rounded-md font-medium transition-all hover:shadow-md hover:bg-gray-300/80 focus:bg-gray-300/80 py-2 px-4"
            >
              Website Development
            </Link>
          </div>
          <div>
            <Link
              href=""
              className="text-xs bg-gray-200 rounded-md font-medium transition-all hover:shadow-md hover:bg-gray-300/80 focus:bg-gray-300/80 py-2 px-4"
            >
              Tailwind
            </Link>
          </div>
        </div>
        <div className="flex gap-2 mt-8 mb-14">
          <p className="text-sm text-gray-500">SHARE:</p>
          <div className="flex gap-3">
            <span>
              <Link href="">
                <svg
                  className="w-5 h-5 text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </Link>
            </span>
            <span>
              <Link href="">
                <svg
                  className="w-5 h-5 text-teal-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                </svg>
              </Link>
            </span>
            <span>
              <Link href="">
                <svg
                  className="w-5 h-5 text-red-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PostContent
