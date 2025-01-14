import Link from "next/link"
import { cn } from "@/styles/lib/utils"
import { StackVertical, StackHorizontal } from "@/common-components/layout-stack/layout-stack"
import Text from "@/common-components/text/text"
import TextHeading from "@/common-components/text-heading/text-heading"
import { Reference } from "../_types/reference"

export function ReferenceCard({ post, isLast }: { post: Reference; isLast?: boolean }) {
    return (
        <div className="group">
            <Link 
                href={post.href || `/references/${post.slug}`}  // a popout link is preferred
                target={post.href ? "_blank" : undefined}
                className={cn(
                    "block py-3",
                    "transition-all duration-300",
                    "hover:translate-x-1"
                )}
            >
                <article>
                    <StackVertical gap="xs">
                        <TextHeading 
                            as="h4" 
                            weight="medium" 
                            className={cn(
                                "group-hover:text-purple-500 transition-colors duration-300"
                            )}
                        >
                            {post.title}
                        </TextHeading>
                        <Text 
                            variant="muted"
                            size="sm"
                            className="line-clamp-2"
                        >
                            {post.description}
                        </Text>
                        <StackHorizontal className="text-muted-foreground" gap="xs">
                            <Text variant="muted" size="xs">
                                Last Updated: {post.lastUpdated}
                            </Text>
                        </StackHorizontal>
                    </StackVertical>
                </article>
            </Link>
            {/* Separator line with reduced top margin */}
            {!isLast && (
                <hr className="border-gray-500/20 mt-3" />
            )}
        </div>
    )
} 