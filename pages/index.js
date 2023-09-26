import { useUser } from '@/lib/firebase/useUser'
import Navbar from './navbar';
import RealtimeData from './table';

export default function Home() {
  const { user } = useUser()

    return (
      <div>
      <Navbar user={user}/>
      <RealtimeData/>
      <></>
      </div>
    )

}

