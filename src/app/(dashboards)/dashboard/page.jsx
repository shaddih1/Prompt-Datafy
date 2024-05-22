import Statistics from './Statistics'
import RecentProjects from './RecentProjects'
import Task from './Task'
import Footer4 from '@/components/common/Footer4'

export const metadata = {
  title: 'Dashboard',
}
const Dashboard = () => {
  return (
    <>
      <div>
        <div className="bg-slate-100 mt-[77px] py-3 px-3">
          <Statistics />
          <RecentProjects />
          <Task />
        </div>
        <Footer4 />
      </div>
    </>
  )
}

export default Dashboard
