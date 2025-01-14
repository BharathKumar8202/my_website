'use client'

import { StackVertical } from "@/common-components/layout-stack/layout-stack";
import BaseContainer from "@/common-components/base-container/base-container";
import TextHeading from "@/common-components/text-heading/text-heading";
import Text from "@/common-components/text/text";
import { IndividualPageFooter } from "@/common-components/footer/IndividualPageFooter";
import { DynamicBreadcrumb } from "@/common-components/breadcrumb/breadcrumb";
import { ThemeToggle } from "@/styles/components/ui/theme-toggle";
import Link from "next/link";

export default function MathReferences() {
    return (
        <>
            <BaseContainer size="md" paddingX="md" paddingY="lg">
                <StackVertical gap="md">
                    <div className="flex items-center justify-between">
                        <DynamicBreadcrumb
                        items={[
                            { href: '/', label: 'Home', emoji: '👾' },
                            { href: '/references', label: 'References' },
                            { label: 'Math' }
                        ]}
                    />
                    <ThemeToggle />
                    </div>

                    <StackVertical gap="md">
                        <TextHeading as="h1" weight="bold">
                            Math References
                        </TextHeading>
                        <Text variant="red">
                            If you have somehow reached this page, you probably have too much time on your hands. But if it's a genuine mistake, click the link below to see all my math references.
                        </Text>
                        <Text className="underline font-bold hover:text-purple-500">
                            <Link href="https://sumitdotml.notion.site/math">This one</Link>
                        </Text>
                    </StackVertical>
                </StackVertical>    
            </BaseContainer>

            <IndividualPageFooter sectionName="References" showToTop={false} />

        </>
    )
}