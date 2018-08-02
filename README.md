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

