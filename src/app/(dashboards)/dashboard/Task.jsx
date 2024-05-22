import Link from 'next/link'
import { cn } from '@/helpers'
import { MenuSvg } from '@/constants/svgIcons'
import { FaArrowRight } from 'react-icons/fa6'

const tasks = [
  {
    id: 1,
    title: 'Draft the new contract document for sales team',
    comment: '21',
    color: 'bg-cyan-500/10 text-cyan-500',
    priority: 'High',
    task: '3/7',
    time: 'Today 10pm',
  },
  {
    id: 2,
    title: 'iOS App home page design',
    comment: '05',
    color: 'bg-cyan-500/10 text-cyan-500',
    priority: 'Medium',
    task: '10/11',
    time: 'Today 5pm',
  },
  {
    id: 3,
    title: 'Enable analytics tracking',
    comment: '07',
    color: 'bg-gray-500/10 text-gray-500',
    priority: 'Medium',
    task: '05/11',
    time: 'Tomorrow 5pm',
  },
  {
    id: 4,
    title: 'Kanban board design',
    comment: '07',
    color: 'bg-gray-500/10 text-gray-500',
    priority: 'Low',
    task: '0/3',
    time: 'Sep 11, 3pm',
  },
]

const TaskWidget = ({
  color,
  comment,
  priority,
  task,
  time,
  title,
  id,
}) => {
  return (
    <div className="bg-white">
      <div className="p-6">
        <div className="flex flex-wrap lg:flex-nowrap items-center sm:justify-between gap-y-2">
          <div className="w-1/2">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                className="rounded border-gray-300"
                id={`task${id}`}
              />
              <label
                className="text-sm font-semibold text-gray-700"
                htmlFor={`task${id}`}
              >
                {title}
              </label>
            </div>
          </div>
          <div className="lg:w-1/3">
            <span
              className={`inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-sm font-semibold ${color}`}
            >
              {time}
            </span>
          </div>
          <div className="lg:w-1/3">
            <div className="flex items-center justify-end gap-6">
              <div>
                <div className="inline-flex items-center gap-2">
                  <MenuSvg />
                  <span className="text-sm text-gray-800 font-medium">
                    {task}
                  </span>
                </div>
                <div
                  className="bg-gray-800 hidden px-2 py-1 rounded transition-all text-white opacity-0 z-50"
                  role="tooltip"
                >
                  10 Subtasks are completed
                  <div className="bg-gray-800 w-2.5 h-2.5 rotate-45 -z-10 rounded-[1px]" />
                </div>
              </div>
              <div>
                <div className="inline-flex items-center gap-2">
                  <MenuSvg />
                  <span className="text-sm text-gray-800 font-medium">
                    {comment}
                  </span>
                </div>
                <div
                  className="bg-gray-800 hidden px-2 py-1 rounded transition-all text-white opacity-0 z-50"
                  role="tooltip"
                >
                  5 Comments
                  <div className="bg-gray-800 w-2.5 h-2.5 rotate-45 -z-10 rounded-[1px]" />
                </div>
              </div>
              <span
                className={cn(
                  priority == 'High'
                    ? 'bg-red-500/10 text-red-500'
                    : priority == 'Medium'
                    ? 'bg-orange-500/10 text-orange-500'
                    : 'bg-green-500/10 text-green-500',
                  'inline-flex items-center gap-1.5 py-0.5 px-2 rounded-md text-xs font-semibold '
                )}
              >
                {priority}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
const Task = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="container">
        <div className="flex items-center justify-between my-6">
          <div>
            <h4 className="text-base text-gray-800">Tasks</h4>
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
        {/* end title */}
        <div className="flex flex-col gap-y-2 w-full mb-4">
          {(tasks ?? []).map((task, idx) => {
            return (
              <TaskWidget
                key={idx}
                color={task.color}
                comment={task.comment}
                priority={task.priority}
                id={task.id}
                task={task.task}
                time={task.time}
                title={task.title}
              />
            )
          })}
          {/* end task */}
        </div>
        <button className="flex items-center justify-center mx-auto mb-6">
          <Link
            href=""
            className="inline-flex items-center justify-center rounded text-xs font-semibold border border-primary text-primary hover:shadow-lg hover:bg-primary hover:text-white hover:shadow-primary/30 focus:shadow-none focus:outline focus:outline-primary/40 px-3 py-2 group"
          >
            <span className="animate-spin inline-block h-4 w-4 border-2 border-primary border-b-transparent group-hover:border-white group-hover:border-b-transparent rounded-full align-[-.125em] me-2" />
            Load More
          </Link>
        </button>
      </div>
    </section>
  )
}

export default Task
