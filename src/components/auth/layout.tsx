import React, { type ReactNode } from 'react'
import '../../styles/global.scss';

interface LayoutProps {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="layout">
            {children}
        </div>
    )
}

export default Layout
