import React, { Component } from 'react';
import resumeData from '../resumeData';

const KNOWLEDGE = {
  name: resumeData.name,
  role: resumeData.role,
  email: resumeData.email,
  phone: resumeData.phone,
  location: resumeData.address,
  about: resumeData.aboutme,
  linkedin: resumeData.socialLinks.find(s => s.name === 'LinkedIn'),
  github: resumeData.socialLinks.find(s => s.name === 'GitHub'),
  skills: resumeData.skills.map(s => s.skillname),
  softSkills: resumeData.softSkills,
  work: resumeData.work,
  education: resumeData.education,
  projects: resumeData.portfolio,
  testimonials: resumeData.testimonials,
};

function getResponse(input) {
  const q = input.toLowerCase().trim();

  if (/^(hi|hello|hey|sup|yo|hola|namaste)[\s!?.]*$/i.test(q)) {
    return `Hey there! I'm ${KNOWLEDGE.name}'s AI assistant. Ask me anything about his skills, experience, projects, or how to get in touch!`;
  }
  if (/who (is|are)|tell.*about (him|hari|yourself)|introduce/i.test(q)) {
    return `${KNOWLEDGE.name} is a ${KNOWLEDGE.role} based in ${KNOWLEDGE.location}. ${KNOWLEDGE.about}`;
  }
  if (/experience|work|job|company|career|where.*work|employment/i.test(q)) {
    const exp = KNOWLEDGE.work.map(w => {
      const period = w.startDate ? `${w.startDate} to ${w.MonthOfLeaving} ${w.YearOfLeaving}` : `${w.MonthOfLeaving} ${w.YearOfLeaving}`;
      return `**${w.CompanyName}** — ${w.specialization} (${period})\n${w.Achievements}`;
    }).join('\n\n');
    return `Here's ${KNOWLEDGE.name}'s professional experience:\n\n${exp}`;
  }
  if (/skill|tech|stack|language|framework|tool|what.*know|what.*use/i.test(q)) {
    const grouped = {};
    resumeData.skills.forEach(s => {
      const cat = s.category || 'other';
      if (!grouped[cat]) grouped[cat] = [];
      grouped[cat].push(s.skillname);
    });
    const lines = Object.entries(grouped).map(([cat, skills]) =>
      `**${cat.charAt(0).toUpperCase() + cat.slice(1)}:** ${skills.join(', ')}`
    ).join('\n');
    return `${KNOWLEDGE.name}'s technical skills:\n\n${lines}\n\n**Soft Skills:** ${KNOWLEDGE.softSkills.join(', ')}`;
  }
  if (/education|study|college|university|degree|bca|masai|school/i.test(q)) {
    const edu = KNOWLEDGE.education.map(e =>
      `**${e.UniversityName}** — ${e.specialization} (${e.YearOfPassing})\n${e.Achievements}`
    ).join('\n\n');
    return `Education background:\n\n${edu}`;
  }
  if (/project|portfolio|built|build|what.*made|work.*on/i.test(q)) {
    const projs = KNOWLEDGE.projects.map(p => {
      let line = `**${p.name}** — ${p.description}\nTech: ${p.techStack}`;
      if (p.liveUrl) line += `\nLive: ${p.liveUrl}`;
      return line;
    }).join('\n\n');
    return `Here are ${KNOWLEDGE.name}'s key projects:\n\n${projs}`;
  }
  if (/socialgear|dsp|amazon|advertising|rbac/i.test(q)) {
    const p = KNOWLEDGE.projects.find(p => /socialgear/i.test(p.name));
    if (p) return `**${p.name}**\n${p.description}\nTech Stack: ${p.techStack}\n\nThis is a production platform integrating 49 Amazon DSP APIs with a hybrid RBAC system achieving under 1ms latency for permission validation, a 50 to 100x improvement.`;
  }
  if (/contact|reach|email|mail|phone|call|hire|connect|available/i.test(q)) {
    return `You can reach ${KNOWLEDGE.name} through:\n\n**Email:** ${KNOWLEDGE.email}\n**Phone:** ${KNOWLEDGE.phone}\n${KNOWLEDGE.linkedin ? '**LinkedIn:** ' + KNOWLEDGE.linkedin.url + '\n' : ''}${KNOWLEDGE.github ? '**GitHub:** ' + KNOWLEDGE.github.url + '\n' : ''}\nHe's always open to discussing new opportunities!`;
  }
  if (/location|where.*live|where.*from|city|address|based/i.test(q)) {
    return `${KNOWLEDGE.name} is based in **${KNOWLEDGE.location}**.`;
  }
  if (/resume|cv|download/i.test(q)) {
    return `You can download ${KNOWLEDGE.name}'s resume by clicking the "Download CV" button in the hero section or the resume section.`;
  }
  if (/react|next\.?js|node|typescript|express|mongo|postgres|prisma/i.test(q)) {
    const match = q.match(/react|next\.?js|node|typescript|express|mongo|postgres|prisma/i);
    if (match) {
      const tech = match[0];
      const relevantWork = KNOWLEDGE.work.filter(w => w.Achievements.toLowerCase().includes(tech.toLowerCase()) || w.specialization.toLowerCase().includes(tech.toLowerCase()));
      const relevantProjects = KNOWLEDGE.projects.filter(p => p.techStack.toLowerCase().includes(tech.toLowerCase()));
      let msg = `Yes! ${KNOWLEDGE.name} has strong experience with **${tech}**.\n\n`;
      if (relevantWork.length) msg += `Used it at: ${relevantWork.map(w => w.CompanyName).join(', ')}\n`;
      if (relevantProjects.length) msg += `Projects using it: ${relevantProjects.map(p => p.name).join(', ')}`;
      return msg;
    }
  }
  if (/testimonial|review|feedback|what.*say/i.test(q)) {
    const test = KNOWLEDGE.testimonials.map(t => `"${t.description}"\n— *${t.name}*`).join('\n\n');
    return `What people say about ${KNOWLEDGE.name}:\n\n${test}`;
  }
  if (/manhattan|1view|chaincode/i.test(q)) {
    const company = q.match(/manhattan|1view|chaincode/i)[0];
    const job = KNOWLEDGE.work.find(w => w.CompanyName.toLowerCase().includes(company.toLowerCase()));
    if (job) {
      const period = job.startDate ? `${job.startDate} to ${job.MonthOfLeaving} ${job.YearOfLeaving}` : `${job.MonthOfLeaving} ${job.YearOfLeaving}`;
      return `**${job.CompanyName}** — ${job.specialization}\n${period}\n\n${job.Achievements}`;
    }
  }
  if (/how many|count.*project|number.*project/i.test(q)) {
    return `${KNOWLEDGE.name} has **${KNOWLEDGE.projects.length} key projects** in his portfolio and **${KNOWLEDGE.work.length} professional roles** spanning 3+ years.`;
  }
  if (/salary|rate|cost|charge|pricing/i.test(q)) {
    return `For rates and availability, please reach out directly to ${KNOWLEDGE.name} at **${KNOWLEDGE.email}**.`;
  }
  if (/thank|thanks|bye|goodbye/i.test(q)) {
    return `You're welcome! Feel free to reach out to ${KNOWLEDGE.name} anytime. Have a great day!`;
  }
  if (/help|what.*ask|what.*do/i.test(q)) {
    return `I can help you learn about ${KNOWLEDGE.name}! Try asking:\n\n"What are his skills?"\n"Tell me about his experience"\n"Show me his projects"\n"How can I contact him?"\n"What's his education?"\n"Tell me about SocialGear DSP"\n"Does he know React?"`;
  }
  return `That's an interesting question! While I might not have the exact answer, I know ${KNOWLEDGE.name} would love to discuss it directly. You can reach him at **${KNOWLEDGE.email}** or ask me about his skills, experience, projects, or education!`;
}

function stripMarkdown(text) {
  return text
    .replace(/\*\*(.+?)\*\*/g, '$1')
    .replace(/\*(.+?)\*/g, '$1')
    .replace(/https?:\/\/\S+/g, '')
    .replace(/[📧📞💼💻🔗🤖👋😊]/g, '')
    .replace(/\n+/g, '. ')
    .replace(/\s+/g, ' ')
    .trim();
}

function formatMessage(text) {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/\n/g, '<br/>');
}

var SpeechRecognition = typeof window !== 'undefined'
  ? (window.SpeechRecognition || window.webkitSpeechRecognition)
  : null;

var synth = typeof window !== 'undefined' ? window.speechSynthesis : null;

export default class AiChat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      messages: [
        { role: 'ai', text: `Hi! I'm ${KNOWLEDGE.name}'s AI assistant.\nAsk me anything or tap the mic to speak!` }
      ],
      input: '',
      isTyping: false,
      isListening: false,
      isSpeaking: false,
      voiceEnabled: true,
      speechSupported: !!SpeechRecognition,
      ttsSupported: !!synth,
    };
    this.messagesEndRef = React.createRef();
    this.recognition = null;
  }

  componentDidUpdate(_, prevState) {
    if (prevState.messages.length !== this.state.messages.length) {
      if (this.messagesEndRef.current) {
        this.messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  componentWillUnmount() {
    this.stopListening();
    this.stopSpeaking();
  }

  speak(text) {
    if (!synth || !this.state.voiceEnabled) return;
    this.stopSpeaking();

    const plain = stripMarkdown(text);
    const utterance = new SpeechSynthesisUtterance(plain);
    utterance.rate = 1.05;
    utterance.pitch = 1;
    utterance.volume = 1;

    var voices = synth.getVoices();
    var preferred = voices.find(function(v) {
      return v.lang.startsWith('en') && v.name.toLowerCase().includes('female');
    }) || voices.find(function(v) {
      return v.lang.startsWith('en') && (v.name.includes('Google') || v.name.includes('Microsoft'));
    }) || voices.find(function(v) {
      return v.lang.startsWith('en');
    });
    if (preferred) utterance.voice = preferred;

    utterance.onstart = () => this.setState({ isSpeaking: true });
    utterance.onend = () => this.setState({ isSpeaking: false });
    utterance.onerror = () => this.setState({ isSpeaking: false });
    synth.speak(utterance);
  }

  stopSpeaking() {
    if (synth) {
      synth.cancel();
      this.setState({ isSpeaking: false });
    }
  }

  startListening() {
    if (!SpeechRecognition) return;
    this.stopSpeaking();

    this.recognition = new SpeechRecognition();
    this.recognition.lang = 'en-US';
    this.recognition.interimResults = true;
    this.recognition.continuous = false;
    this.recognition.maxAlternatives = 1;

    var interimTranscript = '';
    var self = this;

    this.recognition.onstart = function() {
      self.setState({ isListening: true });
    };

    this.recognition.onresult = function(event) {
      interimTranscript = '';
      var finalTranscript = '';
      for (var i = event.resultIndex; i < event.results.length; i++) {
        if (event.results[i].isFinal) {
          finalTranscript += event.results[i][0].transcript;
        } else {
          interimTranscript += event.results[i][0].transcript;
        }
      }
      if (finalTranscript) {
        self.setState({ input: finalTranscript });
      } else if (interimTranscript) {
        self.setState({ input: interimTranscript });
      }
    };

    this.recognition.onend = function() {
      self.setState({ isListening: false });
      var text = self.state.input.trim();
      if (text) {
        self.handleSend();
      }
    };

    this.recognition.onerror = function(event) {
      console.log('Speech recognition error:', event.error);
      self.setState({ isListening: false });
    };

    this.recognition.start();
  }

  stopListening() {
    if (this.recognition) {
      this.recognition.abort();
      this.setState({ isListening: false });
    }
  }

  toggleListening() {
    if (this.state.isListening) {
      this.stopListening();
    } else {
      this.startListening();
    }
  }

  handleSend() {
    var text = this.state.input.trim();
    if (!text) return;

    var newMessages = this.state.messages.concat([{ role: 'user', text: text }]);
    this.setState({ messages: newMessages, input: '', isTyping: true });

    var self = this;
    setTimeout(function() {
      var response = getResponse(text);
      self.setState({
        messages: self.state.messages.concat([{ role: 'ai', text: response }]),
        isTyping: false,
      }, function() {
        self.speak(response);
      });
    }, 600 + Math.random() * 800);
  }

  handleKeyDown(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      this.handleSend();
    }
  }

  render() {
    var state = this.state;

    return (
      <div className="ai-chat-wrapper">
        {state.isOpen && (
          <div className="ai-chat-window glass-card">
            <div className="ai-chat-header">
              <div className="ai-chat-header-left">
                <div className={'ai-avatar-small' + (state.isSpeaking ? ' avatar-speaking' : '')}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="3"/>
                    <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
                  </svg>
                </div>
                <div>
                  <span className="ai-chat-title">AI Voice Assistant</span>
                  <span className="ai-chat-status">
                    <span className={'status-dot' + (state.isListening ? ' listening-dot' : state.isSpeaking ? ' speaking-dot' : '')} />
                    {state.isListening ? 'Listening...' : state.isSpeaking ? 'Speaking...' : 'Online'}
                  </span>
                </div>
              </div>
              <div className="ai-chat-header-right">
                {state.ttsSupported && (
                  <button
                    className={'voice-toggle' + (state.voiceEnabled ? ' voice-on' : '')}
                    onClick={() => { this.stopSpeaking(); this.setState({ voiceEnabled: !state.voiceEnabled }); }}
                    title={state.voiceEnabled ? 'Mute voice' : 'Enable voice'}
                  >
                    {state.voiceEnabled ? (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>
                      </svg>
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                        <line x1="23" y1="9" x2="17" y2="15"/>
                        <line x1="17" y1="9" x2="23" y2="15"/>
                      </svg>
                    )}
                  </button>
                )}
                <button className="ai-chat-close" onClick={() => { this.stopSpeaking(); this.stopListening(); this.setState({ isOpen: false }); }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18"/>
                    <line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                </button>
              </div>
            </div>

            <div className="ai-chat-messages">
              {state.messages.map((msg, i) => (
                <div key={i} className={'ai-msg ' + (msg.role === 'user' ? 'user-msg' : 'bot-msg')}>
                  {msg.role === 'ai' && (
                    <div className="msg-avatar">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="3"/>
                        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
                      </svg>
                    </div>
                  )}
                  <div className="msg-content">
                    <div
                      className="msg-bubble"
                      dangerouslySetInnerHTML={{ __html: formatMessage(msg.text) }}
                    />
                    {msg.role === 'ai' && i > 0 && state.ttsSupported && (
                      <button
                        className="msg-speak-btn"
                        onClick={() => this.speak(msg.text)}
                        title="Read aloud"
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                          <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
              ))}
              {state.isTyping && (
                <div className="ai-msg bot-msg">
                  <div className="msg-avatar">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="3"/>
                      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
                    </svg>
                  </div>
                  <div className="msg-content">
                    <div className="msg-bubble typing-indicator">
                      <span /><span /><span />
                    </div>
                  </div>
                </div>
              )}
              <div ref={this.messagesEndRef} />
            </div>

            <div className="ai-chat-input-area">
              {state.speechSupported && (
                <button
                  className={'mic-btn' + (state.isListening ? ' mic-active' : '')}
                  onClick={() => this.toggleListening()}
                  title={state.isListening ? 'Stop listening' : 'Speak'}
                >
                  {state.isListening && <div className="mic-pulse-ring" />}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                    <line x1="12" y1="19" x2="12" y2="23"/>
                    <line x1="8" y1="23" x2="16" y2="23"/>
                  </svg>
                </button>
              )}
              <input
                type="text"
                value={state.input}
                onChange={e => this.setState({ input: e.target.value })}
                onKeyDown={e => this.handleKeyDown(e)}
                placeholder={state.isListening ? 'Listening...' : 'Type or tap mic to speak...'}
                className={'ai-chat-input' + (state.isListening ? ' input-listening' : '')}
                readOnly={state.isListening}
              />
              <button className="ai-chat-send" onClick={() => this.handleSend()} disabled={!state.input.trim() || state.isListening}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="22" y1="2" x2="11" y2="13"/>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
              </button>
            </div>

            <div className="ai-chat-footer">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
              </svg>
              <span>Voice Enabled</span>
              <span className="ai-dot" />
              <span>Speak or Type</span>
            </div>
          </div>
        )}

        <button
          className={'ai-chat-fab' + (state.isOpen ? ' fab-hidden' : '')}
          onClick={() => this.setState({ isOpen: true })}
          title="Chat with AI Voice Assistant"
        >
          <div className="fab-pulse" />
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
            <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
            <line x1="12" y1="19" x2="12" y2="23"/>
            <line x1="8" y1="23" x2="16" y2="23"/>
          </svg>
          <span className="fab-badge">AI</span>
        </button>
      </div>
    );
  }
}
