<template>
    <form class="create-twoot-panel" @submit.prevent="createNewTwoot"
          :class="{'--exceeded': newTwootCharacterCoount> 180}">
        <label for="newTwoot"><strong>New twoot</strong>
            ({{newTwootCharacterCoount}})/180 </label>
        <textarea id="newTwoot" rows="4" v-model="state.newTwootContent"></textarea>


        <div class="create-twoot-panel__submit">
            <div class="create-twoot-type">
                <label for="newTwootType"><strong>Type: </strong></label>
                <select id="newTwootType" v-model="state.selectedTwootType">
                    <option v-for="(option,index) in state.twootTypes"
                            :value="option.value"
                            :key="index">
                        {{option.name}}
                    </option>
                </select>
            </div>

            <button>
                Twoot!
            </button>

        </div>
    </form>
</template>

<script>
    import  {reactive} from 'vue'
    import {computed} from "@vue/reactivity";
    export default {
        name: "CreateTwootPanel",
        setup(props, ctx) {
            const state = reactive({
                twootTypes: [
                    {value: 'draft', name: 'Draft'},
                    {value: 'instant', name: 'Instant Twoot'}
                ],
                newTwootContent: '',
                selectedTwootType: 'instant'
            })

            const newTwootCharacterCoount = computed(() => (state.newTwootContent.length));
            function createNewTwoot(){
                console.log("newTwootContent: " + state.newTwootContent);
                    if (state.newTwootContent && state.selectedTwootType !=='draft') {
                        console.log("ctx.emit: ");
                        ctx.emit('add-twoot', state.newTwootContent);
                        state.newTwootContent='';
                    }
            }

            return {
                state,
                newTwootCharacterCoount,
                createNewTwoot
            }
        }
    }
</script>

<style lang="scss" scoped>
    .create-twoot-panel {
        margin-top: 20px;
        padding: 20px 0;
        display: flex;
        flex-direction: column;

        textarea {
            border: 1px solid #DFE3E8;
            border-radius: 10px;
        }

        .create-twoot-panel__submit {
            display: flex;
            justify-content: space-around;

            .create-twoot-type {
                padding: 10px 0px;
            }

            button {
                padding: 5px 20px;
                margin: auto 0;
                border-radius: 5px;
                border: none;
                background-color: deeppink;
                color: white;
                font-weight: bold;
            }
        }

        &.--exceeded {
            color: red;
            border-color: red;

            .create-twoot-panel__submit {
                button {
                    background-color: red;
                    color: white;
                }
            }

        }
    }

</style>














