/** @Spec
* Feature: Technology Data Source - Mobile
* Type: lib
* Route: /src/lib/data/mobile.ts
* Description: Central data source for Mobile specializations.
* Acceptance:
* ✅ Compiles without TypeScript errors
* ✅ Lints and formats cleanly
* ✅ Contains all technology definitions for this category.
*/
import type { TechEntry } from '@/data/tech';

export const mobile: Record<string, TechEntry> = {
  "react-native": {
    slug: "react-native",
    name: "React Native",
    category: "Mobile",
    categorySlug: "mobile",
    seo_title: "Hire React Native Developers | Nearshore Software Development",
    meta_description:
      "Build native-quality mobile apps from a single codebase. Hire nearshore React Native experts vetted for performance and native module integration.",
    intro:
      "React Native allows you to build mobile apps using only JavaScript. It uses the same design as React, letting you compose a rich mobile UI from declarative components. You need an expert who can leverage React Native to build a high-performance, native-quality app for both iOS and Android, saving you time and money. Our vetting process, powered by Axiom Cortex™, finds engineers who are masters of the React Native ecosystem. We test their ability to build complex UIs, optimize performance, and bridge to native code when necessary.",
    pains: [
      {
        icon: "AlertTriangle",
        pain: "Is your React Native app slow and janky?",
        problem:
          "A poorly optimized React Native app can feel slow and unresponsive, failing to provide the native-quality experience your users expect. This is often caused by a misunderstanding of the bridge and the main thread.",
        solution:
          "We vet for engineers who are experts in React Native performance. They must demonstrate the ability to use tools like Flipper and the React DevTools to diagnose and fix performance bottlenecks, ensuring your app is smooth and responsive.",
        kpi: "High-Performance and Native-Quality UX",
      },
      {
        icon: "AlertTriangle",
        pain: "Are you struggling to access native device features?",
        problem:
          "While React Native provides a rich set of components, you sometimes need to access a native platform API or a high-performance native component that is not available out of the box.",
        solution:
          "Our engineers are proficient in bridging to native code. They are vetted on their ability to write native modules and UI components in Swift/Objective-C and Java/Kotlin, allowing you to extend React Native to meet any requirement.",
        kpi: "Seamless Integration with Native Code",
      },
    ],
    evaluation: [
      "React Native core components and APIs",
      "Performance optimization and debugging",
      "State management (Zustand, Redux)",
      "Native module and UI component bridging",
      "CI/CD and app store deployment",
    ],
    technical_analysis:
      "The React Native evaluation focuses on building high-quality, cross-platform mobile applications. Candidates are required to build a feature in a React Native app, demonstrating their mastery of the framework and its ecosystem. A critical assessment is their ability to debug performance issues and to write clean, maintainable code. We also test their knowledge of how to bridge to native code to implement a custom feature. Finally, we assess their experience with the full mobile development lifecycle, from development to deployment on the App Store and Google Play.",
    interlink_slugs: ["react", "typescript", "flutter", "mobile", "frontend-web"],
  },
  flutter: {
    slug: "flutter",
    name: "Flutter",
    category: "Mobile",
    categorySlug: "mobile",
    seo_title: "Hire Flutter Experts | Nearshore Software Development",
    meta_description:
      "Build beautiful, natively compiled apps for mobile, web, and desktop. Hire elite nearshore Flutter experts for your software development team.",
    intro:
      "Flutter is Google's UI toolkit for building beautiful, natively compiled applications for mobile, web, and desktop from a single codebase. You need an expert who can leverage Flutter to build high-performance, visually stunning apps that provide a great user experience on any platform. Our vetting process, powered by Axiom Cortex™, finds engineers who are masters of the Flutter framework and the Dart language. We test their ability to build complex UIs, manage state effectively, and optimize performance.",
    pains: [
      {
        icon: "AlertTriangle",
        pain: "Is your app's UI inconsistent across different platforms?",
        problem:
          "Maintaining a consistent look and feel across iOS, Android, and the web can be a major challenge, leading to a fragmented user experience and a lot of duplicated effort.",
        solution:
          "We vet for engineers who are experts in building beautiful and consistent UIs with Flutter. They must demonstrate the ability to use Flutter's rich set of widgets and its powerful layout system to create a pixel-perfect UI that looks and feels great on any platform.",
        kpi: "Pixel-Perfect and Consistent Cross-Platform UI",
      },
      {
        icon: "AlertTriangle",
        pain: "Is your state management logic complex and error-prone?",
        problem:
          "Managing state in a reactive UI framework can be tricky. Without solid architecture, apps become unstable.",
        solution:
          "Our engineers are fluent in advanced Flutter state-management patterns (Bloc, Provider, Riverpod) and build scalable, testable apps.",
        kpi: "Stable and Maintainable Cross-Platform UI",
      },
    ],
    evaluation: [
      "Dart programming language and its core concepts",
      "Flutter widget tree and rendering",
      "State management patterns (Bloc, Provider, Riverpod)",
      "Asynchronous programming with Futures and Streams",
      "Performance optimization in mobile apps",
    ],
    technical_analysis:
      "We vet for engineers who deliver high-performance, cross-platform mobile apps with pixel-perfect UI and robust architecture.",
    interlink_slugs: ["react-native", "firebase", "mobile", "typescript", "qa-automation"],
  },
  ios: {
    slug: "ios",
    name: "iOS (Swift)",
    category: "Mobile",
    categorySlug: "mobile",
    seo_title: "Hire iOS Developers | Nearshore Software Development",
    meta_description:
      "Build high-performance, secure, and intuitive native iOS apps. Hire nearshore iOS developers vetted for Swift, SwiftUI, and Core Data mastery.",
    intro:
      "For the ultimate in performance, security, and user experience on Apple platforms, nothing beats native iOS development with Swift and SwiftUI. You need an engineer who can harness the full power of the iOS SDK to build applications that are not just beautiful, but deeply integrated with the ecosystem. Our vetting process identifies developers who are experts in modern Swift, declarative UI with SwiftUI, and robust data persistence with Core Data. By hiring a native iOS expert, you are investing in a premium, platform-specific experience that delights users and maximizes the capabilities of Apple hardware.",
    pains: [
      {
        icon: "AlertTriangle",
        pain: "Is your app's performance not meeting user expectations?",
        problem:
          "Cross-platform tools often introduce performance overhead, resulting in apps that feel slow, unresponsive, or have a noticeable 'jank' compared to native applications. This compromises the premium user experience expected on iOS.",
        solution:
          "We vet for engineers who are masters of native iOS performance. They demonstrate deep knowledge of Swift, memory management (ARC), and Instruments for profiling and optimization, ensuring your application is fluid, responsive, and power-efficient.",
        kpi: "Native Performance and Responsiveness",
      },
      {
        icon: "AlertTriangle",
        pain: "Are you unable to access the latest iOS features immediately?",
        problem:
          "When Apple releases new features (like Live Activities, Widgets, or new ARKit capabilities), cross-platform frameworks often lag behind, preventing you from delivering cutting-edge experiences to your users.",
        solution:
          "Our native iOS developers are experts in the latest Apple SDKs. They are vetted on their ability to quickly adopt and implement new platform features, giving you a competitive advantage and ensuring your app feels modern and fully integrated.",
        kpi: "Immediate Adoption of New iOS Features",
      },
      {
        icon: "AlertTriangle",
        pain: "Is managing state in SwiftUI complex and causing bugs?",
        problem:
          "While powerful, SwiftUI's declarative nature and property wrappers (`@State`, `@Binding`, `@StateObject`) can be confusing, leading to unexpected UI updates, data inconsistencies, and bugs that are hard to trace.",
        solution:
          "We look for engineers with a deep understanding of the SwiftUI data flow. They are vetted on their ability to choose the correct property wrapper for each situation, manage complex state with Combine, and build a predictable and reliable UI.",
        kpi: "Mastery of SwiftUI State Management",
      },
    ],
    evaluation: [
      "Advanced Swift programming (Protocols, Generics, Concurrency)",
      "Declarative UI with SwiftUI and modern data flow",
      "Data persistence with Core Data and SwiftData",
      "Performance tuning with Instruments",
      "App Store submission and CI/CD for iOS",
    ],
    technical_analysis:
      "The iOS evaluation focuses on modern, Swift-based native development. Candidates must demonstrate mastery of the Swift language, including its strong type system and concurrency features. A critical assessment is their ability to build a complex, responsive UI using SwiftUI and to manage the application's state effectively. We also test their knowledge of data persistence with Core Data or SwiftData and their ability to integrate with native iOS frameworks and APIs. Finally, we assess their experience with the full mobile development lifecycle, from writing unit and UI tests with XCTest to deploying the app to the App Store.",
    interlink_slugs: ["swift", "react-native", "flutter", "kotlin"],
  },
  swift: {
    slug: "swift",
    name: "Swift",
    category: "Mobile",
    categorySlug: "mobile",
    seo_title: "Hire Swift Developers | Nearshore Software Development",
    meta_description:
      "Build fast, safe, and modern apps for all Apple platforms. Hire nearshore Swift developers vetted for protocol-oriented programming and concurrency.",
    intro:
      "Swift is Apple's powerful and intuitive programming language for building apps for iOS, Mac, Apple TV, and Apple Watch. It's designed to be safe, fast, and expressive. You need an expert who can leverage Swift's modern features to write clean, maintainable, and high-performance code. Our vetting process, powered by Axiom Cortex™, finds engineers who are masters of the Swift language. We test their deep understanding of its type system, memory management, and concurrency model, ensuring they can build robust and reliable applications for the entire Apple ecosystem.",
    pains: [
      {
        icon: "AlertTriangle",
        pain: "Is your codebase a mix of legacy Objective-C and modern Swift?",
        problem:
          "Managing a mixed codebase can be a challenge, leading to interoperability issues, inconsistent coding styles, and a steep learning curve for new developers.",
        solution:
          "We vet for engineers who are experts in Swift and its interoperability with Objective-C. They must demonstrate the ability to work in a mixed codebase, to safely refactor Objective-C to Swift, and to write modern, idiomatic Swift code.",
        kpi: "Seamless Objective-C Interoperability and Modernization",
      },
      {
        icon: "AlertTriangle",
        pain: "Are you struggling with concurrency and data races?",
        problem:
          "Writing safe and efficient concurrent code is a major challenge. Traditional concurrency models are often complex and error-prone, leading to data races and other hard-to-debug issues.",
        solution:
          "Our engineers are proficient in Swift's modern concurrency features, including `async/await` and actors. They are vetted on their ability to write safe, simple, and highly efficient concurrent code that eliminates data races by design.",
        kpi: "Safe and Efficient Concurrency with Async/Await",
      },
    ],
    evaluation: [
      "Advanced Swift language features (Generics, Protocols, Enums)",
      "Protocol-Oriented Programming",
      "Memory management with ARC",
      "Concurrency with async/await and actors",
      "Swift Package Manager for dependency management",
    ],
    technical_analysis:
      "The Swift evaluation is a deep dive into the language itself, independent of a specific UI framework. Candidates are required to solve a set of complex algorithmic and architectural problems, demonstrating their mastery of Swift's powerful language features. A critical assessment is their understanding of Protocol-Oriented Programming and how to use it to build flexible and reusable code. We also test their deep knowledge of Swift's memory management model (ARC) and their ability to write safe and efficient concurrent code using `async/await` and actors. Finally, we assess their experience with the Swift Package Manager and building modular, reusable libraries.",
    interlink_slugs: ["ios", "kotlin", "react-native"],
  },
};
