# Fragment
Fragment is fragment of [URI](https://www.wikiwand.com/en/Uniform_Resource_Identifier).

Example URLs:


    https://john.doe@www.example.com:123/forum/questions/?tag=networking&order=newest#top
      |                 |                       |                       |              |
      |                 |                       |                       |              |
      v                 |                       |                       |              |
    https               |                       |                       |              |
    ^^^^^               |                       |                       |              |
    scheme              |                       |                       |              |
                        v                       |                       |              |
            john.doe@www.example.com:123        |                       |              |
            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^        |                       |              |
                |   authority |       |         v                       |              |
                |             |       |  /forum/questions/              |              |
                v             v       v  ^^^^^^^^^^^^^^^^^              |              |
            john.deo www.example.com 123      path                      v              |
            ^^^^ ^^^^^^^^^^^^^^^^^^^ ^^^                 ?tag=networking&order=newest  |
            userinfo   host          port                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^  |
                                                                    query              v
                                                                                     #top
                                                                                     ^^^^
                                                                                     fragment   <---- Yes, fragment is fragment.

# Why fragment?
Fragment can be changed by `window.location.hash`.

Fragment modification doesn't reload a page in browser but create History and never include the fragment idenifier into request messages.

There is a pity that fragment will be ignored by googlebot but can be fixed from `#mystate` to `#!mystate`.

The description about fragment above is the reason why fragment used as the basic of browser route.

[fragment](https://blog.httpwatch.com/2011/03/01/6-things-you-should-know-about-fragment-urls)
