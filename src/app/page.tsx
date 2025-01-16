import { auth } from '@/auth'
import MainLayout from '@/components/layouts'
const Home = async () => {
  const session = await auth()
  console.log(session?.user)
  return (
    <MainLayout>
      <div className='relative h-dvh w-full pt-16'>
        {JSON.stringify(session?.user)}
      </div>
      ;
    </MainLayout>
  )
}

export default Home
