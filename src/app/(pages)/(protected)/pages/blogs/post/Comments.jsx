import Link from 'next/link'
import Image from 'next/image'
import { FaComment } from 'react-icons/fa6'
import AddComment from './AddComment'

//images
import avatar1 from '@/assets/images/avatars/img-1.jpg'
import avatar2 from '@/assets/images/avatars/img-2.jpg'
import avatar4 from '@/assets/images/avatars/img-4.jpg'

const Comments = () => {
  return (
    <section className="lg:py-24 py-14">
      <div className="container">
        <div className="flex items-center gap-2">
          <h1 className="tracking-wider">Comments</h1>
          <span className="bg-gray-200 px-2 rounded-md">3</span>
        </div>
        <div>
          <div className="flex gap-3 my-6">
            <Image
              width={44}
              height={44}
              alt="avatar"
              src={avatar4}
              className="h-11 w-11 rounded-md"
            />
            <div>
              <h6 className="text-sm mb-1">Sansa Stark</h6>
              <p className="text-sm text-gray-500">2 days ago</p>
              <p className="text-sm/relaxed tracking-wider text-gray-600 mt-2">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque.
              </p>
              <Link
                href=""
                className="inline-flex items-center gap-1 text-primary text-sm"
              >
                <FaComment /> Reply
              </Link>
              <div className="flex gap-3 my-6">
                <Image
                  width={44}
                  height={44}
                  alt="avatar"
                  src={avatar1}
                  className="h-11 w-11 rounded-md"
                />
                <div>
                  <h6 className="text-sm mb-1">Cersei Lannister</h6>
                  <p className="text-sm text-gray-500">1 days ago</p>
                  <p className="text-sm/relaxed tracking-wider text-gray-600 mt-2">
                    Itaque earum rerum hic tenetur sapiente delectus aut
                    reiciendis voluptatibus maiores alias consequatur aut
                    perferendis
                  </p>
                  <Link
                    href=""
                    className="inline-flex items-center gap-1 text-primary text-sm"
                  >
                    <FaComment /> Reply
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="border-b" />
          <div className="flex gap-3 my-6">
            <Image
              width={44}
              height={44}
              alt="avatar"
              src={avatar2}
              className="h-11 w-11 rounded-md"
            />
            <div>
              <h6 className="text-sm mb-1">Sansa Stark</h6>
              <p className="text-sm text-gray-500">2 days ago</p>
              <p className="text-sm/relaxed tracking-wider text-gray-600 mt-2">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque.
              </p>
              <Link
                href=""
                className="inline-flex items-center gap-1 text-primary text-sm"
              >
                <FaComment /> Reply
              </Link>
            </div>
          </div>
        </div>
        <AddComment />
      </div>
    </section>
  )
}

export default Comments
