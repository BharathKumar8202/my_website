'use client'

import Content from './content.mdx'
import { mdxComponents } from 'app/mdx-components'
import BaseContainer from '@/common-components/base-container/base-container'
import { StackVertical } from '@/common-components/layout-stack/layout-stack'
import { DynamicBreadcrumb } from '@/common-components/breadcrumb/breadcrumb'
import { ThemeToggle } from '@/styles/components/ui/theme-toggle'
import { IndividualPageFooter } from '@/common-components/footer/IndividualPageFooter'
import TextHeading from '@/common-components/text-heading/text-heading'
import Text from '@/common-components/text/text'

export default function MySelfReflectionFor2025() {
  return (
    <>
      <BaseContainer size="md" paddingX="md" paddingY="lg">
        <StackVertical gap="md">
          <div className="flex items-center justify-between">
            <DynamicBreadcrumb 
              items={[
                { href: '/', label: 'Home', emoji: '👾' },
                { href: '/blog', label: 'Blog' },
                { label: 'My 2025 Resolution' }
              ]}
            />
            <ThemeToggle />
          </div>

          <article>
            <TextHeading as="h1">My 2025 Resolution: Beyond the Roadmaps, Beyond the Timelines</TextHeading>
            <Text variant="muted" size="xs" className="mb-8">January 14, 2025 | 5 min read</Text>

            <div className="prose dark:prose-invert max-w-none">
              <Content components={mdxComponents} />
            </div>
          </article>
        </StackVertical>
      </BaseContainer>

      <IndividualPageFooter parentPageName='Blog' />
    </>
  )
}