'use client'

import Content from './content.mdx'
import { mdxComponents } from 'app/mdx-components'
import BaseContainer from "@/common-components/base-container/base-container"
import { StackVertical } from "@/common-components/layout-stack/layout-stack"
import { DynamicBreadcrumb } from "@/common-components/breadcrumb/breadcrumb"
import { ThemeToggle } from "@/styles/components/ui/theme-toggle"
import { IndividualPageFooter } from "@/common-components/footer/IndividualPageFooter"

export default function Week1() {
    return (
        <BaseContainer size="md" paddingX="md" paddingY="lg">
            <StackVertical gap="md">
                <div className="flex items-center justify-between">
                    <DynamicBreadcrumb 
                        items={[
                            { href: '/', label: 'Home', emoji: '👾' },
                            { href: '/learning', label: 'Learning' },
                            { href: '/learning/weekly-reflections', label: 'Weekly Reflections' },
                            { label: 'Week 1' }
                        ]}
                    />
                    <ThemeToggle />
                </div>
                
                <div className="prose dark:prose-invert max-w-none">
                    <Content components={mdxComponents} />
                </div>
            </StackVertical>
            
            <IndividualPageFooter parentPageName="Weekly Reflections" showToTop={false} />
        </BaseContainer>
    )
} 