import Link from 'next/link'
import Image from 'next/image'

//data
import { Post } from './data'

const BlogPost2 = ({ post }) => {
  return (
    <div>
      <Image
        width={346}
        height={231}
        alt="blogPost2"
        src={post.image.src}
        className="rounded-md mb-5"
      />
      <span
        className={`${post.tag.variant} font-medium rounded-md text-xs py-1 px-2`}
      >
        <Link href="">{post.tag.value}</Link>
      </span>
      <h1 className="text-lg my-3 transition-all hover:text-primary">
        <Link href="">{post.title}</Link>
      </h1>
      <p className="text-sm/relaxed tracking-wider text-gray-500">
        {post.description}
        <Link href="" className="text-primary">
          read more
        </Link>
      </p>
    </div>
  )
}

export default BlogPost2
