import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const AvatarDemo = () => {
  return (
    <Avatar>
      <AvatarImage src='https://cdn.21st.dev/assets/mirror/ec/ec81be4cc810190ce4d240fcc57295965c5cebaa8751558595ade91eb62c09a4.png' alt='Hallie Richards' />
      <AvatarFallback className='text-xs'>HR</AvatarFallback>
    </Avatar>
  )
}

export default AvatarDemo
