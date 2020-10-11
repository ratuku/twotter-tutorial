<template>
    <div class="user-profile">
        <div class="user-profile__user-panel">
            <h1 class="user-profile__username">@{{user.username}}</h1>
            <div class="user-profile__admin-badge" v-if="user.isAdmin">
                    Admin
            </div>
            <div class="user-profile__admin-badge" v-else>
                Not Admin
            </div>
            <div class="user-profile__follower-count">
                <strong>Followers: </strong> {{ followers }}
            </div>
            <create-twoot-panel @add-twoot="addTwoot"/>
        </div>
        <div class="user-profile__twoots-wrapper">
            <Twootitem
                v-for="twoot in user.twoots"
                :key="twoot.id"
                :username="user.username"
                :twoot="twoot"/>
        </div>
    </div>
</template>

<script>
    //import HelloWorld from './components/HelloWorld.vue'
    import Twootitem  from "./Twootitem";
    import CreateTwootPanel from "./CreateTwootPanel";

    export default {
        name: 'UserProfile',
        components: {CreateTwootPanel, Twootitem},
        data(){
            return {
                followers: 0,
                user: {
                    id: 1,
                    username: '_JosueNsumba',
                    firstName: 'Josue',
                    lastName: 'Nsumba',
                    email: 'josuensumba@gmail.com',
                    isAdmin: true,
                    twoots: [
                        {id: 1, content: 'Twoot is Amazing!'},
                        {id: 2, content: "Don't forget to subscriber to the Earth is Square!"}
                    ]
                }
            }
        },
        methods: {
            addTwoot(twoot) {
                console.log("twwot: " + twoot);
                this.user.twoots.unshift({
                    id: this.user.twoots.length + 1,
                    content: twoot.content
                })
            }
        }
    }
    // scope makes csss only for this component
</script>

<style lang="scss" scoped>

    .user-profile {
        display: grid;
        grid-template-columns: 1fr 3fr;
        padding: 50px 5%;

        .user-profile__user-panel {
            display: flex;
            flex-direction: column;
            margin-right: 50px;
            padding: 20px;
            background-color: white;
            border-radius: 5px;
            border: 1px solid #DFE3E8;

            h1 {
                margin: 2px;
            }

            .user-profile__admin-badge {
                background: rebeccapurple;
                color: white;
                border-radius: 5px;
                margin-right: auto;
                padding: 0px 10px;
                font-weight: bold;
                margin-top: 5px;
            }

            .user-profile__create-twoot {

                display: flex;
                flex-direction: column;
                padding-top: 10px;

                &.--exceeded {
                    color: red;
                    border-color: red;
                    button {
                        background-color: red;
                        border: none;
                        color: white;
                    }
                }
            }
        }

        .user-profile__twoots-wrapper {
            display: grid;
            grid-gap: 10px;
        }
    }


</style>
