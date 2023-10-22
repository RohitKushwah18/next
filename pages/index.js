import { useUser } from '@/lib/firebase/useUser'
import Navbar from './navbar';
// import RealtimeData from './table1';
import TableSelection from './tableselection'
export default function Home() {
  const { user } = useUser()

    return (
      <div>
      <Navbar user={user}/>
      <TableSelection/>
      <></>
      </div>
    )

}

