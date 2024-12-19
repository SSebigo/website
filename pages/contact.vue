<template>
  <div class="w-full flex justify-center px-3 py-12 xl:py-20 2xl:py-32">
    <div>
      <div>
        <h1 class="font-merriweather text-xl text-center sm:text-start">
          {{ $t('professionalEnquiries') }}:
        </h1>
        <ul class="my-8">
          <li class="my-2">
            <a
              class="rounded-full border px-5 py-2 flex justify-center items-center text-xl font-semibold"
              href="https://www.linkedin.com/in/françois-grèzes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                name="mdi:linkedin"
                size="30"
                class="mr-2"
              /> LinkedIn
            </a>
          </li>
          <li class="my-2">
            <Dialog
              :open="isEmailDialogOpen"
              @update:open="toggleEmailDialog"
            >
              <DialogTrigger as-child>
                <button class="w-full rounded-full border px-5 py-2 flex justify-center items-center text-xl font-semibold">
                  <Icon
                    name="mdi:email"
                    size="30"
                    class="mr-2"
                  /> Email
                </button>
              </DialogTrigger>
              <DialogContent class="rounded-lg max-w-80 sm:max-w-sm md:max-w-md">
                <DialogHeader>
                  <DialogTitle>
                    {{ $t('emailEnquiries') }}
                  </DialogTitle>
                  <DialogDescription>
                    {{ $t('emailEnquiriesDescription') }}
                  </DialogDescription>
                </DialogHeader>
                <form class="max-h-72 xl:max-h-128">
                  <p class="font-roboto font-semibold text-sm ml-1 mb-1">
                    {{ $t('emailAddress') }}
                  </p>
                  <Input
                    v-model="emailFrom"
                    :placeholder="$t('emailAddress')"
                  />
                  <p class="font-roboto font-semibold text-sm ml-1 mb-1 mt-5">
                    {{ $t('object') }}
                  </p>
                  <Input
                    v-model="emailSubject"
                    :placeholder="$t('object')"
                    class="mb-5"
                  />
                  <p class="font-roboto font-semibold text-sm ml-1 mb-1">
                    {{ $t('message') }}
                  </p>
                  <Textarea
                    v-model="emailContent"
                    :placeholder="$t('message')"
                    class="max-h-52 xl:max-h-72"
                  />
                </form>
                <DialogFooter>
                  <DialogClose as-child>
                    <Button>
                      Cancel
                    </Button>
                  </DialogClose>
                  <Button
                    type="submit"
                    class="mb-2 sm:mb-0"
                    @click="sendMail"
                  >
                    <Icon name="mdi:send" /> Send
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </li>
        </ul>
      </div>
      <div>
        <h1 class="font-merriweather text-xl text-center sm:text-start">
          {{ $t('otherEnquiries') }}:
        </h1>
        <ul class="my-8">
          <li>
            <a
              class="rounded-full border px-5 py-2 flex justify-center items-center text-xl font-semibold"
              href="https://bsky.app/profile/ssebigo.bsky.social"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                name="ri:bluesky-fill"
                size="30"
                class="mr-2"
              /> Bluesky
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Dialog, DialogTrigger, DialogContent, DialogHeader } from '~/components/ui/dialog'
import { Input } from '~/components/ui/input'
import { Textarea } from '~/components/ui/textarea'
import { useToast } from '~/components/ui/toast/use-toast'

const mail = useMail()
const { toast } = useToast()

const isEmailDialogOpen = ref(false)

const toggleEmailDialog = () => {
  isEmailDialogOpen.value = !isEmailDialogOpen.value
}

const emailFrom = ref<string>('')
const emailSubject = ref<string>('')
const emailContent = ref<string>('')

const sendMail = () => {
  if (!emailFrom.value || !emailSubject.value || !emailContent.value) {
    toast({
      title: 'Please fill all fields',
      description: 'All fields are required to send an email',
    })

    return
  }

  mail.send({
    from: emailFrom.value,
    subject: emailSubject.value,
    text: `${emailFrom.value}\n${emailContent.value}`,
  })

  emailFrom.value = ''
  emailSubject.value = ''
  emailContent.value = ''

  toast({
    title: 'Email sent!',
    description: 'Your email has been sent successfully',
  })

  toggleEmailDialog()
}
</script>

<style>

</style>
