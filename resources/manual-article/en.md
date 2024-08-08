# Introduction to Fediverse

## What is Fediverse?

The Fediverse (Federated Universe) is a collection of interconnected, decentralized social networks and online platforms that work together using a set of open standards and protocols. Unlike traditional centralized platforms, where a single company controls the entire network, the Fediverse operates through independent servers (known as "instances") that communicate with each other.

## How Does Fediverse Differ from Traditional Centralized Platforms?

### Centralized Platforms

- **Central Control**: Platforms like Twitter, Facebook, and Instagram are controlled by a single company that manages all the data, users, and features.
- **Data Ownership**: Your data is stored on the platform's servers, and the company has access to and control over this data.
- **Moderation**: Content moderation is managed by the platform itself, which may lead to inconsistent enforcement of rules and policies.

### Fediverse

- **Decentralized**: The Fediverse is made up of numerous independent servers (instances) that interact with each other. Each server is managed by its own administrator or community.
- **Data Ownership**: Users have more control over their data since it's stored on the server of their chosen instance.
- **Moderation**: Moderation policies are set by individual instances, which can lead to a more diverse range of rules and approaches.

## What is an Instance?

An instance is an independent server that is part of the Fediverse network. Each instance operates its own version of a Fediverse platform (like Mastodon, Misskey, or PeerTube) and has its own rules, policies, and community standards. Instances can interact with each other, allowing users to follow and communicate with people on other instances within the Fediverse.

## How to understand the relationship between instances and platforms

A platform is the **software** running on a server, while an instance is the **server** running the software.

The platform software determines which functions you can use and how you can talk to others.

If you use something you are familiar with as an example, then X (ex Twitter) is a **platform**, which is composed of a series of **software** developed by X Corp. X Corp's server will run these software, so at this time X Corp's server is an **instance** of the X platform. Since X Corp's software code is not completely public, others cannot build an instance just like X.

For the platform of the Fediverse, most of its software code is **public**, so anyone can build an instance with the public software code. Therefore, there will be many servers (instances) running the same software (platform), and the difference between them is the rules and atmosphere of the community.

Of course, the admins of some instances will modify the software code to achieve the purpose of adding functions or changing the theme. Therefore, specifically, instances running the same platform may also have some differences in some places.

## How to Join the Fediverse

1. **Choose a Platform**: Decide which Fediverse platform you'd like to use. Some popular platforms include:
   - **[Mastodon](https://joinmastodon.org/)**: A microblogging platform similar to Twitter.
   - **[Misskey](https://misskey-hub.net/)**: A social platform with rich features.
   - **[Pleroma](https://pleroma.social/)**: Like Mastodon, but is lighter and more flexible.
   - [GoToSocial](https://gotosocial.org/): A fast, fun, ActivityPub server.
   - [PeerTube](https://joinpeertube.org/): A video hosting and sharing platform.
   - [Friendica](https://friendi.ca/): A social network that supports a variety of protocols.

   **Mastodon** is the most popular platform of the Fediverse, the ecosystem and software built around it are also rich. **If you are not sure, it's a good choice.**

   > **No matter which platform you choose, you can communicate with people on other platforms**. This is one of the features of the Fedeiverse. So there is no need to worry, just choose the one you like.

2. **Find an Instance**: Each platform has multiple instances. You can find a list of instances and choose one based on your interests, community, or moderation policies. Here's some good places for you to find the optimal server.
   - **[Mastodon Servers](https://joinmastodon.org/servers)**: Official page of Mastodon for newcomers to find a server.
   - **[Misskey Server List](https://misskey-hub.net/en/servers/)**: If you choose Misskey, here's the official page for you to find the instance that fits you.
   - **[FediDB](https://fedidb.org/)**: No matter which platform you choose, you can always find a suitable server here.
   - [Pleroma Featured Servers](https://pleroma.social/#featured-instances): Few instances that runs pleroma.

3. **Create an Account**: Once you've chosen an instance, visit its website and sign up for an account. You may need to agree to the instance's rules and policies.

4. **Explore and Connect**: After creating an account, you can start exploring the Fediverse. Follow other users, join discussions, and connect with people on different instances.

5. **Engage with the Community**: Participate in conversations, share content, and contribute to the Fediverse community. Remember, each instance may have its own unique culture and norms.

By joining the Fediverse, you become part of a diverse and interconnected network of platforms that emphasize decentralization, user control, and community-driven moderation.

## Tutorial: Create an account

Taking the Mastodon as an example, after you select the instance you want to join, find the "Create account" button on the web page and click it to enter the account registration page.

![About page of an mastodon instance that contians the "Create account" button](/resources/manual-article/img/en-US/gotoregister.jpg)

Next, read the instance's rules. If you agree to them, click accpet, and then you are able to register an account. Fill in the information and click "Sign up". Some instances are open for registration and you can register an account directly without approval, while others require review and approval by the administrator.

![Sign up page of Mastodon](/resources/manual-article/img/en-US/register.png)

### Tutorial: Communicating with users of other instances

As mentioned before, people on different platforms in the Fediverse can communicate with each other. Therefore, if you and your friends are not in the same instance, or even in different instances, you can still communicate with each other.

Different platforms have different operating logics. Let's take Mastodon as an example.

On the website of your instance, click the search box in the upper left corner

![Search page of Mastodon](/resources/manual-article/img/en-US/search-empty.png)

Enter your friend's full username to get the results. Click Follow and you will see your friend's posts (also known as toots) on your homepage.

![Search result page](/resources/manual-article/img/en-US/search-result.png)

## Usernames in the Fediverse

Similar to email, a username in the Fediverse consists of two parts: **account** and **host**. The specific format is: `@account@host`. The host name is usually the domain name of the instance, while the account name is chosen by the user.

> Unlike email accounts, the account name also has an @ symbol in front of it

For example, `@example@social.a2x.pub` represents the user "example" on the `social.a2x.pub` instance.
