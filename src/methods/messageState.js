import emitter from '@/methods/emitter';

export default function messageState(res, title = '更新') {
  if (res.data.success) {
    emitter.emit('push-message', {
      style: 'success',
      title: `${title}`,
    });
  } else {
    const message = typeof res.data.message === 'string' ? [res.data.message] : res.data.message;
    emitter.emit('push-message', {
      style: 'danger',
      title: `${title}`,
      content: message.join('、'),
    });
  }
}
