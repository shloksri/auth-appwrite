
1. if user updates, then put it in dependency aray for logout functionality to work. - done
2. Even if user is logged in, when we refresh the page, login button is still showing and quickly disappearing. how to fix that? - done using Session storage
3. too many logs after testing auth0 in local
4. Each function in useContext is running two times. - fixed by removing StrictMode.

5. Added one console.log() - Shlok, first check if user is stored and what is the value:  null
It logged when the user first opened the web page. After we logged in, it ran again. Is it an issue or something else?

6. Appwrite issue - User (role: guests) missing scope (account)