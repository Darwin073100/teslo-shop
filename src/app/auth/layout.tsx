import { NextPage } from 'next'

interface Props {
    children: React.ReactNode
}

const AuthLayout = ({ children }: Props) => {
  return (
    <>
        <div className='min-h-screen bg-gray-500'>
            { children }
        </div>
    </>
  )
}

export default AuthLayout;