import { ListenerRegisterInterface } from '../../../interfaces/ListenerRegister'
import { ListenerInterface } from '../../../interfaces/Listener'
import { BotInterface } from '../../../interfaces/Bot'
import { EventEmitter } from 'events'

/*
 * Listener register.
 */
export class ListenerRegister implements ListenerRegisterInterface {
  private emitter: EventEmitter

  /**
   * Listener register constructor.
   *
   * @param bot
   */
  constructor(private bot: BotInterface) {
    this.emitter = bot.eventEmitter
  }

  /**
   * Register listener.
   *
   * @param listener
   */
  register(listener: ListenerInterface) {
    listener.setContext(this.bot.context)

    this.emitter.on(
      'channelCreate',
      async channel => await listener.onChannelCreate(channel)
    )
    this.emitter.on(
      'channelDelete',
      async channel => await listener.onChannelDelete(channel)
    )
    this.emitter.on(
      'channelPinsUpdate',
      async (channel, time) => await listener.onChannelPinsUpdate(channel, time)
    )
    this.emitter.on(
      'channelUpdate',
      async (oldChannel, newChannel) =>
        await listener.onChannelUpdate(newChannel, oldChannel)
    )
    this.emitter.on(
      'clientUserGuildSettingsUpdate',
      async settings => await listener.onClientUserGuildSettingsUpdate(settings)
    )
    this.emitter.on(
      'clientUserSettingsUpdate',
      async settings => await listener.onClientUserSettingsUpdate(settings)
    )
    this.emitter.on('debug', async info => await listener.onDebug(info))
    this.emitter.on(
      'disconnect',
      async event => await listener.onDisconnect(event)
    )
    this.emitter.on(
      'emojiCreate',
      async emoji => await listener.onEmojiCreate(emoji)
    )
    this.emitter.on(
      'emojiDelete',
      async emoji => await listener.onEmojiDelete(emoji)
    )
    this.emitter.on(
      'emojiUpdate',
      async (oldEmoji, newEmoji) =>
        await listener.onEmojiUpdate(newEmoji, oldEmoji)
    )
    this.emitter.on('error', async error => await listener.onError(error))
    this.emitter.on(
      'guildBanAdd',
      async (guild, user) => await listener.onGuildBanAdd(guild, user)
    )
    this.emitter.on(
      'guildBanRemove',
      async (guild, user) => await listener.onGuildBanRemove(guild, user)
    )
    this.emitter.on(
      'guildCreate',
      async guild => await listener.onGuildCreate(guild)
    )
    this.emitter.on(
      'guildDelete',
      async guild => await listener.onGuildDelete(guild)
    )
    this.emitter.on(
      'guildIntegrationUpdate',
      async guild => await listener.onGuildIntegrationUpdate(guild)
    )
    this.emitter.on(
      'guildMemberAdd',
      async member => await listener.onGuildMemberAdd(member)
    )
    this.emitter.on(
      'guildMemberAvaiable',
      async member => await listener.onGuildMemberAvailable(member)
    )
    this.emitter.on(
      'guildMemberRemove',
      async member => await listener.onGuildMemberRemove(member)
    )
    this.emitter.on(
      'guildMembersChunk',
      async (members, guild) =>
        await listener.onGuildMembersChunk(members, guild)
    )
    this.emitter.on(
      'guildMemberSpeaking',
      async (member, speaking) =>
        await listener.onGuildMemberSpeaking(member, speaking)
    )
    this.emitter.on(
      'guildMemberUpdate',
      async (oldMember, newMember) =>
        await listener.onGuildMemberUpdate(newMember, oldMember)
    )
    this.emitter.on(
      'guildUnavaiable',
      async guild => await listener.onGuildUnavaiable(guild)
    )
    this.emitter.on(
      'guildUpdate',
      async (oldGuild, newGuild) =>
        await listener.onGuildUpdate(newGuild, oldGuild)
    )
    this.emitter.on('message', message => {
      listener.onMessage(message)
    })
    this.emitter.on(
      'messageDelete',
      async message => await listener.onMessageDelete(message)
    )
    this.emitter.on(
      'messageDeleteBulk',
      async messages => await listener.onMessageDeleteBulk(messages)
    )
    this.emitter.on(
      'messageReactionAdd',
      async (reaction, user) =>
        await listener.onMessageReactionAdd(reaction, user)
    )
    this.emitter.on(
      'messageReactionRemove',
      async (reaction, user) =>
        await listener.onMessageReactionRemove(reaction, user)
    )
    this.emitter.on(
      'messageReactionRemoveAll',
      async message => await listener.onMessageReactionRemoveAll(message)
    )
    this.emitter.on(
      'messageUpdate',
      async (oldMessage, newMessage) =>
        await listener.onMessageUpdate(newMessage, oldMessage)
    )
    this.emitter.on(
      'presenceUpdate',
      async (oldMember, newMember) =>
        await listener.onPresenceUpdate(newMember, oldMember)
    )
    this.emitter.on(
      'rateLimit',
      async rateLimitInfo => await listener.onRateLimit(rateLimitInfo)
    )
    this.emitter.on('ready', async () => await listener.onReady())
    this.emitter.on('reconnecting', async () => await listener.onReconnecting())
    this.emitter.on(
      'resume',
      async replayed => await listener.onResume(replayed)
    )
    this.emitter.on(
      'roleCreate',
      async role => await listener.onRoleCreate(role)
    )
    this.emitter.on(
      'roleDelete',
      async role => await listener.onRoleDelete(role)
    )
    this.emitter.on(
      'roleUpdate',
      async (oldRole, newRole) => await listener.onRoleUpdate(newRole, oldRole)
    )
    this.emitter.on(
      'typingStart',
      async (channel, user) => await listener.onTypingStart(channel, user)
    )
    this.emitter.on(
      'typingStop',
      async (channel, user) => await listener.onTypingStop(channel, user)
    )
    this.emitter.on(
      'userNoteUpdate',
      async (user, oldNote, newNote) =>
        await listener.onUserNoteUpdate(user, newNote, oldNote)
    )
    this.emitter.on(
      'userUpdate',
      async (oldUser, newUser) => await listener.onUserUpdate(newUser, oldUser)
    )
    this.emitter.on(
      'voiceStateUpdate',
      async (oldMember, newMember) =>
        await listener.onVoiceStateUpdate(newMember, oldMember)
    )
    this.emitter.on('warn', async info => await listener.onWarn(info))
    this.emitter.on(
      'webhookUpdate',
      async channel => await listener.onWebhookUpdate(channel)
    )

    listener.onRegister()
    return this
  }
}
