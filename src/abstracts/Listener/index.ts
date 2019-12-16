/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Channel,
  ClientUserGuildSettings,
  ClientUserSettings,
  Emoji,
  Guild,
  User,
  GuildMember,
  Message,
  Collection,
  Snowflake,
  MessageReaction,
  Role,
  GuildEmbedData,
  TextChannel
} from 'discord.js'
import { RegisterableInterface } from '../../interfaces/Registerable'
import { HasBotContext } from '../HasBotContext'

/*
 * Listener abstract.
 */
export abstract class Listener extends HasBotContext
  implements RegisterableInterface {
  /**
   * On register.
   */
  onRegister() {}

  /**
   * On boot.
   */
  onBoot() {}

  /**
   * On channel create.
   *
   * @param channel
   */
  onChannelCreate(channel: Channel) {}

  /**
   * On channel delete.
   *
   * @param channel
   */
  onChannelDelete(channel: Channel) {}

  /**
   * On channel pins update.
   *
   * @param channel
   * @param time
   */
  onChannelPinsUpdate(channel: Channel, time: Date) {}

  /**
   * On channel update.
   *
   * @param oldChannel
   * @param newChannel
   */
  onChannelUpdate(newChannel: Channel, oldChannel: Channel) {}

  /**
   * On client user guild settings update.
   *
   * @param settings
   */
  onClientUserGuildSettingsUpdate(settings: ClientUserGuildSettings) {}

  /**
   * On client user settings update.
   *
   * @param settings
   */
  onClientUserSettingsUpdate(settings: ClientUserSettings) {}

  /**
   * On debug.
   *
   * @param info
   */
  onDebug(info: string) {}

  /**
   * On disconnect.
   * @param event
   */
  onDisconnect(event: CloseEvent) {}

  /**
   * On emoji create.
   *
   * @param emoji
   */
  onEmojiCreate(emoji: Emoji) {}

  /**
   * On emoji delete.
   *
   * @param emoji
   */
  onEmojiDelete(emoji: Emoji) {}

  /**
   * On emoji update.
   *
   * @param newEmoji
   * @param oldEmoji
   */
  onEmojiUpdate(newEmoji: Emoji, oldEmoji: Emoji) {}

  /**
   * On error.
   *
   * @param error
   */
  onError(error: Error) {}

  /**
   * On guild ban add.
   *
   * @param guild
   * @param user
   */
  onGuildBanAdd(guild: Guild, user: User) {}

  /**
   * On guild ban remove.
   *
   * @param guild
   * @param user
   */
  onGuildBanRemove(guild: Guild, user: User) {}

  /**
   * On guild create.
   *
   * @param guild
   */
  onGuildCreate(guild: Guild) {}

  /**
   * On guild delete.
   *
   * @param guild
   */
  onGuildDelete(guild: Guild) {}

  /**
   * On guild integration update.
   *
   * @param guild
   */
  onGuildIntegrationUpdate(guild: Guild) {}

  /**
   * On guild member add.
   *
   * @param member
   */
  onGuildMemberAdd(member: GuildMember) {}

  /**
   * On guild member avaiable.
   *
   * @param member
   */
  onGuildMemberAvailable(member: GuildMember) {}

  /**
   * On guild member remove.
   *
   * @param member
   */
  onGuildMemberRemove(member: GuildMember) {}

  /**
   * On guild members chunk.
   *
   * @param members
   * @param guild
   */
  onGuildMembersChunk(members: GuildMember[], guild: Guild) {}

  /**
   *
   * On guild member speaking.
   *
   * @param member
   * @param speaking
   */
  onGuildMemberSpeaking(member: GuildMember, speaking: boolean) {}

  /**
   * On guild member update.
   *
   * @param newMember
   * @param oldMember
   */
  onGuildMemberUpdate(newMember: GuildMember, oldMember: GuildMember) {}

  /**
   * On guild unavaiable.
   *
   * @param guild
   */
  onGuildUnavaiable(guild: Guild) {}

  /**
   * On guild update.
   *
   * @param newGuild
   * @param oldGuild
   */
  onGuildUpdate(newGuild: Guild, oldGuild: Guild) {}

  /**
   * On message.
   *
   * @param message
   */
  onMessage(message: Message) {}

  /**
   * On message delete.
   *
   * @param message
   */
  onMessageDelete(message: Message) {}

  /**
   * On message delete bulk.
   *
   * @param messages
   */
  onMessageDeleteBulk(messages: Collection<Snowflake, Message>) {}

  /**
   * On message reaction add.
   *
   * @param reaction
   * @param user
   */
  onMessageReactionAdd(reaction: MessageReaction, user: User) {}

  /**
   * On message reaction remove.
   *
   * @param reaction
   * @param user
   */
  onMessageReactionRemove(reaction: MessageReaction, user: User) {}

  /**
   * On message reaction remove all.
   *
   * @param message
   */
  onMessageReactionRemoveAll(message: Message) {}

  /**
   * On message update.
   *
   * @param newMessage
   * @param oldMessage
   */
  onMessageUpdate(newMessage: Message, oldMessage: Message) {}

  /**
   * On presence update.
   *
   * @param newMember
   * @param oldMember
   */
  onPresenceUpdate(newMember: GuildMember, oldMember: GuildMember) {}

  /**
   * On rate limit.
   *
   * @param rateLimitInfo
   */
  onRateLimit(rateLimitInfo: {
    limit: number
    timeDifference: number
    path: string
    method: string
  }) {}

  /**
   * On ready.
   */
  onReady() {}

  /**
   * On reconnecting.
   */
  onReconnecting() {}

  /**
   * On resume.
   *
   * @param replayed
   */
  onResume(replayed: number) {}

  /**
   * On role create.
   *
   * @param role
   */
  onRoleCreate(role: Role) {}

  /**
   * On role delete.
   *
   * @param role
   */
  onRoleDelete(role: Role) {}

  /**
   * On role update.
   *
   * @param newRole
   * @param oldRole
   */
  onRoleUpdate(newRole: Role, oldRole: Role) {}

  /**
   * On typing start.
   *
   * @param channel
   * @param user
   */
  onTypingStart(channel: Channel, user: User) {}

  /**
   * On typing stop.
   *
   * @param channel
   * @param user
   */
  onTypingStop(channel: Channel, user: User) {}

  /**
   * On user note update.
   *
   * @param user
   * @param newNote
   * @param oldNote
   */
  onUserNoteUpdate(user: User, newNote: string, oldNote: string) {}

  /**
   * On user update.
   *
   * @param newUser
   * @param oldUser
   */
  onUserUpdate(newUser: User, oldUser: User) {}

  /**
   * On voice state update.
   *
   * @param newMember
   * @param oldMember
   */
  onVoiceStateUpdate(newMember: GuildMember, oldMember: GuildEmbedData) {}

  /**
   * On warn.
   *
   * @param info
   */
  onWarn(info: string) {}

  /**
   * On webhook update.
   *
   * @param channel
   */
  onWebhookUpdate(channel: TextChannel) {}
}
