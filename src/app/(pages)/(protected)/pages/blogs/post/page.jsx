import PostNavigation from './PostNavigation'
import Hero from './Hero'
import PostContent from './PostContent'
import Comments from './Comments'
import Footer3 from '@/components/common/Footer3'


export const metadata = {
  title: 'Blog Post',
}

const BlogPost = () => {
  return (
    <>
      <div className="text-gray-700">
        <Hero />

        <PostContent />

        <PostNavigation />

        <Comments />

        <Footer3 />
      </div>
    </>
  )
}

export default BlogPost
