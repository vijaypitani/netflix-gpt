# Netflix GPT
- Create React App
- Configured TailwindCSS
- Header
- Login Form
- Sign up Form
- Form Validation
- useRef Hook
- Firebase setup
- Deploying our app to production
- Create signUp User Account
- Implement sign In user Api
- Create Redux Store with userSlice
- Implemented Sign out
- Update Profile
- BugFix: Sign up user displayName and profile picture update
- BugFix: If the user is not logged in Redirect/browse to login Page and vice-verse
- Unsubscribed to the onAuthStateChanged to callback.
- Add hardcoded values to the constants file.
- Register TMDB API & create an app & get acess token
- Get Data from TMDB now playing movies at API
- Custom Hook for Now Playing Movies
- Create MovieSlice
- Update Store with movies Data
- Planning for MainContainer & seconddary Container
- Fetch Data for Trailer video
- Update Store with tailer video data
- Embedded the youtube video and make it autoplay and mute
- Tailwind classes to make main container look awesome
- Build Secondary Component
- Build Moive List
- Build Moive Card
- TMDB Image CDN URL
- Made the Browsre page amazing with Tailwind css
- usePopularMovies, useTopRatedMovies, useUpcomingMovies.js custom hook
- GPT search Page
- GPT Search Bar
- Multi-language Feature in our APP




# Features
- Login/Sign Up
   - Sign In / Sign Up Form
   - redirect to Browse Page

- Browse (after authentication)
   - Header
   -Main movie
       - Tailer in Background
       - Title & Description
       - MoiveSuggestions
          - MoviesLists 
- NetflixGPT
  - Search Bar
  - Movie Suggestions


# Steps for Deployment:
- 0.Install firbase CLI - 'npm install -g firebase-tools'
- 1.Firebase Login - 'firebase login'
- 2.Initilize Firebase - 'firebase init', then select Hosting
- 3.Deploy command - 'firebase deploy'




git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/vijaypitani/netflix-gpt.git
git push -u origin main