# LaunchToCosmos

## Making space-launch data useful in a web application

LaunchToCosmos brings launch schedules, mission details and space content into a Next.js application. It demonstrates my work with React interfaces, TypeScript and external APIs, including the less visible work of handling incomplete data and inconsistent formats.

[Product](https://launchtocosmos.com.br) · [Helio's portfolio](https://helio2323.github.io/helio-reis-portfolio/index.en.html) · [GitHub profile](https://github.com/helio2323)

### The problem

A launch schedule is more than a list of dates. Missions can be delayed, dates can arrive in different formats, and a launch may have no usable broadcast. The application needs to present that information clearly without inventing a live stream or showing a different mission on a detail page.

### My contribution

My work on LaunchToCosmos includes the Next.js/React application, integration with space-data APIs, filtering and navigation, and presentation of mission information. I also work on the data-handling logic that connects provider responses to the interface.

### A workflow worth demonstrating

1. Browse upcoming launches on the homepage.
2. Open the launch list and filter by provider, time period or search term.
3. Open a mission and review its details.
4. Inspect an available broadcast or the appropriate unavailable state.
5. Explore a NASA content page to show another API integration.

### How the system fits together

```text
Next.js pages and React components
                  |
       Typed integration functions
          /                     \
 RocketLaunch.Live            NASA APIs
          |                     |
 Query building, dates,      Optional Supabase
 media and ID selection      APOD cache
          \                     /
        Mission and content interfaces
```

The launch integration builds queries for pagination, provider and period. It checks HTTP responses and API-level errors, normalizes dates, and separates authenticated and public data paths. A mission is selected by its requested ID instead of taking the first item in an API response.

For NASA's Astronomy Picture of the Day, the application first checks a configured Supabase cache, then requests the official API when needed. It validates required fields before returning content. If the request fails, the function returns an unavailable result rather than manufacturing a story or image.

### An engineering detail: state belongs in the URL

Launch filters update URL parameters so a search can be shared and browser navigation can restore the interface. The filter component synchronizes its form state after navigation. Search parameters also inform page metadata and indexing rules.

The stream-handling logic distinguishes upcoming, live, replay and unavailable states. Existing test cases cover examples such as delayed launches, missing media and completed broadcasts without a recording. These edge cases matter because a timestamp alone is not enough to promise that a stream or replay exists.

### Stack

Next.js · React · TypeScript · Tailwind CSS · REST APIs · Supabase · Node.js tooling · node:test

### Quality and practical limits

The repository contains node:test cases for query construction, launch selection and stream normalization. The application also includes metadata generation and a web app manifest. These are implementation features, not proof of a particular search ranking, install count or uptime target.

The result is a navigable space-information product with concrete integration and data-quality decisions. External providers still control launch updates, rate limits and broadcast availability.

### Why this is relevant to a development team

The project provides clear examples for frontend and full-stack interviews: typed API boundaries, URL-driven state, cache behavior, server-rendered metadata and defensive handling of third-party data.

Source code is private. Product demonstrations and technical walkthroughs are available on request.
