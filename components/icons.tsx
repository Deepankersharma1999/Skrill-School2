import { ArrowUpRightIcon, MessageCircleMore, ChevronLeft, ChevronRight, Loader, Search, Menu, X, UserIcon, PhoneIcon, Mail, BuildingIcon, BookIcon, CaptionsIcon, Check, Clock, Calendar, MoveRight, MoveLeft, MapPin, Calculator } from "lucide-react";

import { cn } from "@/lib/utils";

type CustomLoaderProps = {
    className?: string;
};

function CenterLoader() {
    return (
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <CustomLoader />
        </span>
    );
}

function CustomLoader({ className }: CustomLoaderProps) {
    return <Loader className={cn("size-5 animate-spin", className)} />;
}

export const Icons = {
    search: Search,
    Menu: Menu,
    X: X,
    UserIcon: UserIcon,
    PhoneIcon: PhoneIcon,
    Mail: Mail,
    BuildingIcon: BuildingIcon,
    BookIcon: BookIcon,
    CaptionsIcon: CaptionsIcon,
    check: Check,
    Clock: Clock,
    Calendar: Calendar,
    MoveRight: MoveRight,
    MoveLeft: MoveLeft,
    MapPin: MapPin,
    Calculator: Calculator,
    ChevronRight: ChevronRight,
    ChevronLeft: ChevronLeft,
    MessageCircleMore: MessageCircleMore,
    ArrowUpRightIcon: ArrowUpRightIcon,

    loaderCenter: CenterLoader,
};
