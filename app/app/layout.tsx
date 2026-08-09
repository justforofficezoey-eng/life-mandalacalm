
import './globals.css'

export const metadata = {
  title: 'Life Mandala',
  description: 'AI生命曼陀罗'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="zh-CN">
      <body>
        {children}
      </body>
    </html>
  )
}
