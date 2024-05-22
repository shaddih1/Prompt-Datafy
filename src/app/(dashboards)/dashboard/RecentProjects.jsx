import dynamic from 'next/dynamic'
import Link from 'next/link'
import Image from 'next/image'
const PopoverLayout = dynamic(
  () => import('@/components/headless-ui/PopoverLayout')
)
import {
  FaArrowRight,
  FaEllipsis,
  FaEye,
  FaPencil,
  FaTrash,
} from 'react-icons/fa6'

//images
import avatar8 from '@/assets/images/avatars/img-8.jpg'
import avatar5 from '@/assets/images/avatars/img-5.jpg'

const projects = [
  {
    date: 'Aug 09, 2020',
    title: 'Shreyu - Design Updates',
    variant: 'bg-primary/10 text-primary',
    catagory: 'Designing',
    description: 'Update shreyu with modern and latest trends...',
    progress: '75%',
    progressVariant: 'bg-green-500',
    image: [avatar8, avatar5],
  },
  {
    date: 'Aug 10, 2020',
    title: 'Prompt v2.0',
    variant: 'bg-orange-500/10 text-orange-500',
    catagory: 'Planning',
    description: 'Plan new features and functionality for prompt...',
    progress: '50%',
    progressVariant: 'bg-red-500',
    image: [avatar8, avatar5],
  },
  {
    date: 'Aug 11, 2020',
    title: 'Hyper React v4.0',
    variant: 'bg-sky-500/10 text-sky-500',
    catagory: 'Development',
    description: 'Update shreyu with modern and latest trends...',
    progress: '60%',
    progressVariant: 'bg-amber-500',
    image: [avatar8, avatar5],
  },
]

const ProjectWidget = ({
  date,
  catagory,
  description,
  image,
  title,
  progress,
  variant,
  progressVariant,
}) => {
  return (
    <div className="bg-white rounded">
      <div className="p-6">
        {/* action start */}
        <div className="flex items-center">
          <div className="grow">
            <p className="text-gray-400 text-sm font-medium">{date}</p>
          </div>
          <div className="shrink text-end">
            <PopoverLayout
              toggler={<FaEllipsis />}
              togglerClass="text-gray-800"
              placement="bottom-end"
            >
              <div
                id="recent-drop-1"
                className="bg-white  shadow rounded py-2 px-1.5 min-w-[10rem]"
              >
                <Link
                  className="flex gap-2 items-center py-1.5 px-5 text-base text-gray-500 hover:bg-slate-100 hover:text-slate-700 rounded"
                  href=""
                >
                  <FaEye />
                  <span>View</span>
                </Link>
                <Link
                  className="flex gap-2 items-center py-1.5 px-5 text-base text-gray-500 hover:bg-slate-100 hover:text-slate-700 rounded"
                  href=""
                >
                  <FaPencil />
                  <span>Edit</span>
                </Link>
                <hr className="my-2" />
                <Link
                  className="flex gap-2 items-center py-1.5 px-5 text-base text-red-500 hover:bg-slate-100 rounded"
                  href=""
                >
                  <FaTrash />
                  <span>Delete</span>
                </Link>
              </div>
            </PopoverLayout>
          </div>
        </div>
        {/* action end */}
        <div className="mt-3">
          <h4 className="mt-0 mb-1">
            <a className="text-lg text-gray-600 hover:text-primary" href="#">
              {title}
            </a>
          </h4>
          <span
            className={`inline-flex items-center gap-1.5 py-1 px-2 rounded-md text-xs font-semibold ${variant}`}
          >
            {catagory}
          </span>
          <p className="text-gray-400 text-sm my-4">{description}</p>
        </div>
        {/* progress */}
        <div className="mt-4">
          <div className="flex mb-3">
            <div className="grow">
              <h6 className="mt-0">Progress</h6>
            </div>
            <div className="shrink text-end">
              <small className="fw-semibold">{progress}</small>
            </div>
          </div>
          <div className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700 ">
            <div
              className={`flex flex-col justify-center overflow-hidden ${progressVariant}`}
              role="progressbar"
              style={{ width: `${progress}` }}
              aria-valuenow={25}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
        </div>
        {/* progress end */}
        <div className="flex -space-x-2 mt-3">
          {(image ?? []).map((avatar, idx) => {
            return (
              <Image
                width={32}
                height={32}
                key={idx}
                className="inline-block h-8 w-8 rounded-full border-2 border-white dark:border-gray-800"
                src={avatar}
                alt="Image Description"
              />
            )
          })}
        </div>
        {/* assignment end */}
      </div>
    </div>
  )
}
const RecentProjects = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="container">
        <div className="flex items-center justify-between my-6">
          <div>
            <h4 className="text-base text-gray-800">Recent Projects</h4>
          </div>
          <div className="text-end">
            <Link
              href="#"
              className="inline-flex gap-1 items-center font-semibold text-primary text-sm"
            >
              View All <FaArrowRight size={16} />
            </Link>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 my-3">
          {(projects ?? []).map((project, idx) => {
            return (
              <ProjectWidget
                date={project.date}
                catagory={project.catagory}
                description={project.description}
                image={project.image}
                progress={project.progress}
                title={project.title}
                variant={project.variant}
                progressVariant={project.progressVariant}
                key={idx}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default RecentProjects
